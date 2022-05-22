const path = require('path');

require('@babel/register')({
    configFile: path.resolve(__dirname, '../babel.config.js'),
    extensions: ['.jsx', '.js', '.ts', '.tsx', '.less'],
    only: [/^((?!node_modules).)*$/, /gg-ukit/],
    plugins: [
        [
            'css-modules-transform',
            {
                camelCase: true,
                extensions: ['.css', '.less'],
            },
        ],
        'dynamic-import-node',
    ],
});

require('./app.js');
