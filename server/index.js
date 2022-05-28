import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import axios from 'axios';
import adapter from 'axios/lib/adapters/http';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import { createMemoryHistory } from 'history';
import path from 'path';
import serialize from 'serialize-javascript';

import { createStore } from 'models/store';

import { App } from 'components/App';

const fetcher = axios.create({ adapter });
dotenv.config({ path: './.env' });
const app = express();

const auth = {
    username: process.env.BASE_AUTH_API_USER,
    password: process.env.BASE_AUTH_API_SECRET,
};

app.get(/server/, async (req, res) => {
    res.status(404);
    return res.send('Not found');
});

app.get(/\.(js|css|map|ico|woff)$/, express.static(path.resolve(__dirname, '../')));

app.get(/\.(json)$/, async (req, res) => {
    res.contentType('application/json');
    res.status(200);
    return res.send({ test: 1 });
});

app.use('*', async (req, res) => {
    let api;
    try {
        api = await fetcher.get('http://gamespirit.org/api/v1/', { auth });
    } catch (error) {
        res.status(500);
        return res.send('api error');
    }
    const history = createMemoryHistory({ initialEntries: [req.originalUrl], initialIndex: 0 });
    const store = createStore(history, { counter: { value: api.data.count } });
    const appView = renderToString(
        <Provider store={store}>
            <App history={history} />
        </Provider>
    );
    const appHtml = `<div id="app">${appView}</div>`;
    const storeHtml = `<script>window.__state__ = ${serialize(store.getState())}</script>`;

    const html = fs
        .readFileSync(path.resolve(__dirname, '../index.html'), { encoding: 'utf8' })
        .replace('<div id="app"></div>', appHtml + storeHtml);

    res.contentType('text/html');
    res.status(200);
    return res.send(html);
});

app.listen('9000', () => {
    // eslint-disable-next-line no-console
    console.log('Express server started at http://localhost:9000');
});
