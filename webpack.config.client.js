const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ProvidePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const aliases = require('./aliases');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build/[name].[chunkhash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png)?$/,
                use: ['file-loader'],
            },
            {
                test: /\.(css|less)$/i,
                include: [/getrand\/src/, /gg-ukit/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new ProvidePlugin({
            process: 'process/browser',
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            minify: true,
            inject: false,
        }),
        new MiniCssExtractPlugin(),
        new LoadablePlugin(),
    ],
    resolve: {
        alias: aliases,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    },
    optimization: {
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
