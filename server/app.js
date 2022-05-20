import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import express from 'express';
import fs from 'fs';
import path from 'path';

import { createStore } from 'models/store';

const app = express();

const { App } = require('../src/components/App');

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));

app.use('*', async (req, res) => {
    const store = createStore();
    const view = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const appWithStore = `<div id="app">${view}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(
        store.getState()
    ).replace(/</g, '\\u003c')}</script>`;

    const styles = fs.readFileSync(path.resolve(__dirname, '../dist/main.css'), 'utf8');

    const html = fs
        .readFileSync(path.resolve(__dirname, '../dist/index.html'), { encoding: 'utf8' })
        .replace('<div id="app"></div>', appWithStore)
        .replace('</head>', `<style>${styles}</style></head>`);

    res.contentType('text/html');
    res.status(200);

    return res.send(html);
});

app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});
