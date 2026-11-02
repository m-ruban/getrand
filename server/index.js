import express from 'express';
import path from 'path';

import render from 'server/render';
import { asyncHandler, sentryErrorHandler, sentryRequest } from 'server/sentry';
import { articlesByIds, articlesByType } from 'server/shards/reviews';

const app = express();
app.use(sentryRequest);

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
app.use('/shards/reviews/', asyncHandler(articlesByType));
app.use('/shards/reviews-by-ids/', asyncHandler(articlesByIds));

// ssr root
app.use('*', asyncHandler(render));
app.use(sentryErrorHandler);

app.listen('9000', () => {
    // eslint-disable-next-line no-console
    console.log('Express server started at http://localhost:9000');
});
