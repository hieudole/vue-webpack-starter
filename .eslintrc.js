module.exports = {
    plugins: ['vue'],
    extends: [
        'eslint:recommended',
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        'object-shorthand': 'error',
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'prefer-template': 'error',
        'no-useless-concat': 'error',
        'no-unused-vars': 'error',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-const-assign': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'eol-last': ['error', 'always'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'directive', next: '*' },
            { blankLine: 'always', prev: '*', next: 'class' },
            { blankLine: 'always', prev: '*', next: 'export' },
            { blankLine: 'any', prev: 'export', next: 'export' },
            { blankLine: 'always', prev: '*', next: 'const' },
            { blankLine: 'any', prev: 'const', next: 'const' },
            { blankLine: 'always', prev: '*', next: 'function' },
            { blankLine: 'any', prev: 'const', next: 'function' },
            { blankLine: 'always', prev: '*', next: 'if' },
            { blankLine: 'any', prev: 'const', next: 'if' },
        ],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 5,
            'multiline': {
                'max': 5,
                'allowFirstLine': false
            }
        }],
    },
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
};
