const path = require('path');
const { ProvidePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development' === process.env.NODE_ENV ? 'development' : 'production',
    entry: 'development' === process.env.NODE_ENV ? ['./src/index.dev.jsx'] : ['./src/index.prod.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)?$/,
                use: ['file-loader'],
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
            minify: false,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components'),
            models: path.resolve(__dirname, './src/models'),
        },
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
    devtool: 'source-map',
};
