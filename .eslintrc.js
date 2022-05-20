const path = require('path');

module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: ['plugin:react/recommended', 'prettier'],
    plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error'],
        'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
        react: {
            version: '17.0',
        },
        'import/resolver': {
            webpack: {
                config: './webpack.config.client.js',
            },
        },
    },
    overrides: [
        {
            parser: '@typescript-eslint/parser',
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: path.join(__dirname, 'tsconfig.json'),
            },
        },
    ],
};
