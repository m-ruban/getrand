const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    devServer: {
        port: 8088,
        historyApiFallback: true,
    },
});
