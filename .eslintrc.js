const path = require('path');

module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: ['plugin:react/recommended', 'prettier'],
    plugins: ['prettier', 'react-hooks', '@typescript-eslint', 'simple-import-sort'],
    rules: {
        'no-console': ['error'],
        'prettier/prettier': ['error'],
        'react-hooks/exhaustive-deps': 'warn',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
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
            extends: ['plugin:react/recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: path.join(__dirname, 'tsconfig.json'),
            },
        },
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            ['^react', '^@?\\w'],
                            ['^(@|models)(/.*|$)'],
                            ['^\\u0000'],
                            ['^(@|components)(/.*|$)'],
                            ['^\\u0000'],
                            ['^.+\\.?(less)$'],
                        ],
                    },
                ],
            },
        },
    ],
};
