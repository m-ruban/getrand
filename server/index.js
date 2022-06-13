import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath } from 'react-router';
import axios from 'axios';
import adapter from 'axios/lib/adapters/http';
import dotenv from 'dotenv';
import express from 'express';
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
const app = express();

const auth = {
    username: process.env.BASE_AUTH_API_USER,
    password: process.env.BASE_AUTH_API_SECRET,
};

// hide server bundle
app.get(/server/, async (req, res) => {
    res.status(404);
    return res.send('Not found');
});

// some static
app.get(/\.(js|css|map|ico|woff|svg)$/, express.static(path.resolve(__dirname, '../')));

// api redirects
app.get(/\.(json)$/, async (req, res) => {
    res.contentType('application/json');
    res.status(200);
    return res.send({ test: 1 });
});

// ssr root
app.use('*', async (req, res) => {
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
    let api;
    try {
        api = await Promise.all(
            route.api(matchedRoute.params).map((url) => fetcher.get(`http://gamespirit.org${url}`, { auth }))
        );
    } catch (error) {
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

    // render app
    const appView = renderToString(
        <Provider store={store}>
            <App history={history} />
        </Provider>
    );
    const appHtml = `<div id="app">${appView}</div>`;
    const storeHtml = `<script>window.__state__ = ${serialize(storeInstance)}</script>`;

    // inject html
    const html = fs
        .readFileSync(path.resolve(__dirname, '../index.html'), { encoding: 'utf8' })
        .replace('<div id="app"></div>', appHtml + storeHtml)
        .replace('<title />', tags(metaTags, req.originalUrl));

    res.contentType('text/html');
    res.status(200);
    return res.send(html);
});

app.listen('9000', () => {
    // eslint-disable-next-line no-console
    console.log('Express server started at http://localhost:9000');
});
