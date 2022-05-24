import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import axios from 'axios';
import express from 'express';
import fs from 'fs';
import { createMemoryHistory } from 'history';
import path from 'path';
import serialize from 'serialize-javascript';

import counter from 'models/counter';
import { createStore } from 'models/store';

import { App } from 'components/App';

const app = express();

app.get(/\.(js|css|map|ico|woff)$/, express.static(path.resolve(__dirname, '../dist')));

app.get(/\.(json)$/, async (req, res) => {
    res.contentType('application/json');
    res.status(200);
    return res.send({ test: 1 });
});

const auth = {
    username: 'getrand',
    password: 'secret',
};

app.use('*', async (req, res) => {
    let api;
    try {
        api = await axios.get('http://gamespirit.org/api/v1/', { auth });
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
        .readFileSync(path.resolve(__dirname, '../dist/index.html'), { encoding: 'utf8' })
        .replace('<div id="app"></div>', appHtml + storeHtml);

    res.contentType('text/html');
    res.status(200);
    return res.send(html);
});

app.listen('9000', () => {
    // eslint-disable-next-line no-console
    console.log('Express server started at http://localhost:9000');
});
