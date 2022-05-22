const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
    module: {
        rules: [
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
    plugins: [new MiniCssExtractPlugin()],
});
