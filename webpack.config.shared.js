const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { ModuleFederationTypesPlugin } = require('@cloudbeds/webpack-module-federation-types-plugin');

const aliases = require('./aliases');
const federationConfig = require('./federation.config.json');
const clientConfig = require('./webpack.config.client');

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: './src/index.shared.jsx',
    output: {
        path: path.resolve(__dirname, 'dist/shared'),
        filename: 'build/[name].[chunkhash].js',
        publicPath:
            process.env.NODE_ENV === 'development' ? 'http://localhost:9001/' : 'https://gamespirit.org/shared/',
        clean: true,
    },
    devServer: {
        port: 9001,
        static: {
            directory: path.join(__dirname, 'dist/@types'),
        },
    },
    module: {
        rules: [...clientConfig.module.rules],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            ignoreOrder: true,
        }),
        new ModuleFederationPlugin({
            ...federationConfig,
            library: {
                type: 'var',
                name: 'getrand',
            },
            filename: 'remoteEntry.js',
            shared: {
                react: {
                    eager: true,
                },
                'react-dom': {
                    eager: true,
                },
                'gg-ukit': {
                    eager: true,
                },
            },
        }),
        new ModuleFederationTypesPlugin({
            downloadTypesWhenIdleIntervalInSeconds: 120,
        }),
    ],
    resolve: {
        alias: aliases,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
};
