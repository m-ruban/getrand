const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ProvidePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const aliases = require('./aliases');

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build/[name].[chunkhash].js',
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/,
                use: ['file-loader', 'svgo-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|png)?$/,
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
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            ignoreOrder: true,
        }),
        new LoadablePlugin(),
    ],
    resolve: {
        alias: aliases,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
                gg: {
                    name: 'gg',
                    test: (entry) => entry.context && entry.context.match(/gg-ukit/),
                    chunks: 'all',
                    priority: 3,
                },
                vendor: {
                    name: 'vendor',
                    test: /node_modules/,
                    chunks: 'all',
                    priority: 2,
                },
            },
        },
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
};
