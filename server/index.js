import express from 'express';
import path from 'path';

import render from './render';

const app = express();

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
app.use('*', render);

app.listen('9000', () => {
    // eslint-disable-next-line no-console
    console.log('Express server started at http://localhost:9000');
});
