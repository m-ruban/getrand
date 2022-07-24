/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath } from 'react-router';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import axios from 'axios';
import adapter from 'axios/lib/adapters/http';
import dotenv from 'dotenv';
import fs from 'fs';
import { createMemoryHistory } from 'history';
import path from 'path';
import serialize from 'serialize-javascript';

import { createStore } from 'models/store';

import routes, { route404 } from 'modules/routes';
import tags from 'modules/tags';

import { App } from 'components/App';

const fetcher = axios.create({ adapter });
dotenv.config({ path: './.env' });

// request config
const timeout = process.env.TIMEOUT ? Number(process.env.TIMEOUT) : 2000;
const auth = {
    username: process.env.BASE_AUTH_API_USER,
    password: process.env.BASE_AUTH_API_SECRET,
};
const retries = 3;

const render = async (req, res) => {
    // try match path
    let errorCode = 0;
    let matchedRoute = matchPath(req.originalUrl, {
        path: routes.map(({ path }) => path),
        exact: true,
    });

    if (!matchedRoute) {
        errorCode = 404;
        matchedRoute = {
            path: '/not-found/',
            url: '/not-found/',
            isExact: false,
            params: {},
        };
        console.log(`WARN: 404 on client ${req.originalUrl}`);
    }

    // get requirements for current request
    let route = routes.find(({ path }) => path === matchedRoute.path) || route404;

    // try get api data
    let api = [];
    let attempt = 1;
    const requests = route.api(matchedRoute.params);
    let failed = requests.length > 0;
    if (requests.length > 0) {
        while (attempt <= retries) {
            try {
                api = await Promise.all(
                    requests.map((url) => fetcher.get(`http://gamespirit.org${url}`, { auth, timeout }))
                );
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
                errorCode = error.request.res?.statusCode;
                break;
            }
        }
    }

    // something going wrong
    if (failed || errorCode) {
        res.status(errorCode);
        console.log(`WARN: something going wrong ${errorCode}`);
        return res.send(`something going wrong ${errorCode}`);
    }

    // basic on api request
    // create state
    const history = createMemoryHistory({ initialEntries: [req.originalUrl], initialIndex: 0 });
    const preloadedState = route.getInitState(api);
    // request state data
    preloadedState.request = {
        url: req.protocol + '://' + req.get('host'),
    };
    const store = createStore(history, preloadedState);
    const storeInstance = store.getState();
    const { metaTags } = storeInstance;

    // loadable
    const statsFile = path.resolve(__dirname, '../loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });

    // render app
    const appView = renderToString(
        <ChunkExtractorManager extractor={extractor}>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </ChunkExtractorManager>
    );

    const scriptTags = extractor.getScriptTags();
    const styleTags = extractor.getStyleTags();

    const appHtml = `<div id="app">${appView}</div>`;
    const storeHtml = `<script>window.__state__ = ${serialize(storeInstance)}</script>`;

    // inject html
    const html = fs
        .readFileSync(path.resolve(__dirname, '../index.html'), { encoding: 'utf8' })
        .replace('<div id="app"></div>', appHtml + storeHtml)
        .replace('<title></title>', tags(metaTags, req.originalUrl))
        .replace('</head>', `${styleTags}</head>`)
        .replace('</body>', `${scriptTags}</body>`);

    res.contentType('text/html');
    res.status(200);
    return res.send(html);
};

export default render;
