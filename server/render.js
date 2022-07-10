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

import routes from 'modules/routes';
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
    // match path
    const matchedRoute = matchPath(req.originalUrl, {
        path: routes.map(({ path }) => path),
        exact: true,
    });
    if (!matchedRoute) {
        res.status(404);
        return res.send('404');
    }

    // get requirements for current request
    const route = routes.find(({ path }) => path === matchedRoute.path);

    // try get api data
    let api = [];
    let attempt = 1;
    let failed = true;
    while (attempt <= retries) {
        try {
            api = await Promise.all(
                route
                    .api(matchedRoute.params)
                    .map((url) => fetcher.get(`http://gamespirit.org${url}`, { auth, timeout }))
            );
            failed = false;
            break;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`WARN: request failed on attempt ${attempt}`);
            attempt++;
        }
    }

    if (failed) {
        res.status(500);
        return res.send('api error');
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
