const path = require('path');

require('@babel/register')({
    configFile: path.resolve(__dirname, '../babel.config.js'),
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
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
