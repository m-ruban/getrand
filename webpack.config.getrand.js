const path = require('path');
const { ProvidePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const aliases = require('./aliases');

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
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
    plugins: [
        new ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    resolve: {
        alias: aliases,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /node_modules/,
                },
            },
        },
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
};
