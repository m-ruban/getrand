module.exports = {
    presets: [
        '@babel/env',
        '@babel/react',
        [
            '@babel/preset-typescript',
            {
                isTSX: true,
                allExtensions: true,
            },
        ],
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/transform-arrow-functions',
        '@babel/proposal-object-rest-spread',
        '@loadable/babel-plugin',
        ['babel-plugin-webpack-alias', { config: './webpack.config.client.js' }],
    ],
};
