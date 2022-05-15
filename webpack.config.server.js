const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
    mode: 'production',
    entry: './src/index.prod.js',
    module: {
        rules: [
            {
                test: /\.(css|less)$/i,
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
    plugins: [new MiniCssExtractPlugin()],
});
