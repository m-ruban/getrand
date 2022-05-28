const path = require('path');
const { ProvidePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

const config = merge(common, {
    target: 'node',
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/server'),
        filename: ({ chunk: { name } }) => {
            return name === 'main' ? 'index.js' : '[name].js';
        },
    },
    ignoreWarnings: [
        {
            module: /express\/lib\/view\.js/,
            message: /dependency/,
        },
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/i,
                include: [/getrand\/src/, /getrand\/server/],
                use: ['babel-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)?$/,
                use: ['file-loader'],
            },
            {
                test: /\.(css|less)?$/,
                use: ['ignore-loader'],
            },
        ],
    },
});

config.plugins = [
    new ProvidePlugin({
        process: 'process/browser',
    }),
];

module.exports = config;
