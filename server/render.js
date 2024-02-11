/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath } from 'react-router';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import fs from 'fs';
import { createMemoryHistory } from 'history';
import path from 'path';
import serialize from 'serialize-javascript';

import { createStore } from 'models/store';

import { host } from 'modules/links';
import routes, { route404 } from 'modules/routes';
import tags from 'modules/tags';

import fetcher from 'server/fetcher';

import { App } from 'components/App';

const RETRIES = 3;

const render = async (req, res) => {
    // try match path
    let responseCode = 0;
    let matchedRoute = null;
    for (const { path, exact } of routes) {
        matchedRoute = matchPath(req.originalUrl, { path, exact });
        if (matchedRoute) {
            break;
        }
    }

    // 404 page detect
    if (!matchedRoute) {
        responseCode = 404;
        matchedRoute = { path: '/not-found/', params: {} };
        console.log(`WARN: 404 on client ${req.originalUrl}`);
    }

    // get requirements for current request
    let route = routes.find(({ path }) => path === matchedRoute.path) || route404;

    // try get api data
    let api = [];
    let attempt = 1;
    const requests = route.api(matchedRoute.params, req.query);
    let failed = requests.length > 0;
    let apiErrorCode = 0;
    if (requests.length > 0) {
        while (attempt <= RETRIES) {
            try {
                api = await Promise.all(requests.map((url) => fetcher.get(`${host}${url}`)));
                failed = false;
                break;
            } catch (error) {
                // retry request if timeout work
                if (error.code === 'ECONNABORTED') {
                    console.log(`WARN: request failed on attempt ${attempt}`);
                    attempt++;
                    continue;
                }

                // try to save code and break while
                apiErrorCode = error.request.res?.statusCode;
                break;
            }
        }
    }

    // something going wrong
    if (failed || apiErrorCode) {
        res.status(apiErrorCode || 400);
        console.log(`WARN: something going wrong with api ${apiErrorCode}, url - ${req.originalUrl}`);
        return res.send(`something going wrong with api ${apiErrorCode}`);
    }

    // basic on api request create state
    const history = createMemoryHistory({ initialEntries: [req.originalUrl], initialIndex: 0 });
    const preloadedState = route.getInitState(api);
    preloadedState.request = { url: 'https://' + req.get('host') };
    preloadedState.matchedParams = matchedRoute.params;
    const store = createStore(history, preloadedState);
    const storeInstance = store.getState();
    const { metaTags } = storeInstance;

    // loadable
    const statsFile = path.resolve(__dirname, '../loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile, outputPath: path.resolve(__dirname, '../') });

    // render app
    const appView = renderToString(
        <ChunkExtractorManager extractor={extractor}>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </ChunkExtractorManager>
    );

    // calc static
    const scriptTags = extractor.getScriptTags();
    const styleTags = await extractor.getInlineStyleTags();
    const appHtml = `<div id="app">${appView}</div>`;
    const storeHtml = `<script>window.__state__ = ${serialize(storeInstance)}</script>`;
    const encoding = { encoding: 'utf8' };

    // inject html
    const html = fs
        .readFileSync(path.resolve(__dirname, '../index.html'), { encoding: 'utf8' })
        .replace('<div id="app"></div>', appHtml + storeHtml)
        .replace('<title></title>', tags(metaTags, req.originalUrl))
        .replace('</head>', `${styleTags}</head>`)
        .replace('</body>', `${scriptTags}</body>`);

    res.contentType('text/html');
    res.status(responseCode || 200);
    return res.send(html);
};

export default render;
