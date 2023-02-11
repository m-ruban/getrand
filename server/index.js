import express from 'express';
import path from 'path';

import render from 'server/render';
import { articlesByIds, articlesByType } from 'server/shards/reviews';

const app = express();

// hide server bundle
app.get(/\/server\/.*/, async (req, res) => {
    res.status(404);
    return res.send('Not found');
});

// some static
app.get(
    /\.(js|css|map|woff|svg)$/,
    express.static(path.resolve(__dirname, '../'), {
        maxAge: 3600000 * 24 * 30, // 30d
    })
);

// shards
app.use('/shards/reviews/', articlesByType);
app.use('/shards/reviews-by-ids/', articlesByIds);

// ssr root
app.use('*', render);

app.listen('9000', () => {
    // eslint-disable-next-line no-console
    console.log('Express server started at http://localhost:9000');
});
