const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const app = express();

const { App } = require('../src/components/App');

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));

app.use('*', async (req, res) => {
    const view = ReactDOMServer.renderToString(<App />);
    const styles = fs.readFileSync(path.resolve(__dirname, '../dist/main.css'), 'utf8');

    const html = fs
        .readFileSync(path.resolve(__dirname, '../dist/index.html'), { encoding: 'utf8' })
        .replace('<div id="app"></div>', `<div id="app">${view}</div>`)
        .replace('</head>', `<style>${styles}</style></head>`);

    res.contentType('text/html');
    res.status(200);

    return res.send(html);
});

app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});
