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

import { getWithRetry } from 'server/utils';

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
        // eslint-disable-next-line no-console
        console.log(`WARN: 404 on client ${req.originalUrl}`);
    }

    // get requirements for current request
    let route = routes.find(({ path }) => path === matchedRoute.path) || route404;

    // try get api data
    const requests = route.api(matchedRoute.params, req.query);
    const urls = requests.map((url) => `${host}${url}`);
    let apiFailedAfterRetry = false;
    const onError = () => (apiFailedAfterRetry = true);
    const settled = await Promise.allSettled(urls.map((url) => getWithRetry(url, RETRIES, onError)));
    const results = settled.map((request, index) => {
        return request.status === 'fulfilled'
            ? { ok: true, request: request.value, url: urls[index] }
            : {
                  ok: false,
                  request: request.value,
                  url: urls[index],
                  error: request.reason && request.reason.code,
                  status: request.reason.response.status,
              };
    });

    // without requiried data call error
    const failed = results.filter((request) => !request.ok);
    let have404 = false;
    if (failed.length > 0 || apiFailedAfterRetry) {
        have404 = failed.some(({ status }) => status === 404);
        if (have404) {
            res.status(404);
            // eslint-disable-next-line no-console
            console.log(`WARN: 404 on api, url - ${req.originalUrl}`);
            return res.send(`404, url - ${req.originalUrl}`);
        }
        if (!have404) {
            const errorInfo = failed.map((request) => `${request.url}[${request.error || 'ERR'}]`).join(', ');
            res.status(500);
            // eslint-disable-next-line no-console
            console.log(`WARN: something going wrong with api ${errorInfo}, url - ${req.originalUrl}`);
            return res.send(`something going wrong with api ${errorInfo}, url - ${req.originalUrl}`);
        }
    }

    // basic on api request create state
    const api = results.filter((request) => request.ok).map(({ request }) => request);
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
    const preview = route.getPreview ? route.getPreview(api) : '';

    // inject html
    const html = fs
        .readFileSync(path.resolve(__dirname, '../index.html'), { encoding: 'utf8' })
        .replace('<div id="app"></div>', appHtml + storeHtml)
        .replace('<title></title>', tags(metaTags, req.originalUrl, preview))
        .replace('</head>', `${styleTags}</head>`)
        .replace('</body>', `${scriptTags}</body>`);

    res.contentType('text/html');
    res.status(responseCode || 200);
    return res.send(html);
};

export default render;
