// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = defineConfig([
    expoConfig,

    // TypeScript / TSX
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            /* ------------------ Formatting ------------------ */
            'semi': ['error', 'always'],
            'quotes': ['error', 'single', { avoidEscape: true }],
            'comma-dangle': ['error', 'always-multiline'],
            'eol-last': ['error', 'always'],
            'no-trailing-spaces': 'error',

            /* ------------------ General JS ------------------ */
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'eqeqeq': ['error', 'always'],
            'curly': ['error', 'all'],
            'no-var': 'error',
            'prefer-const': 'error',
            'object-shorthand': 'error',

            /* ------------------ TypeScript ------------------ */
            ...tseslint.configs.recommended.rules,

            'semi': ['error', 'always'],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports' },
            ],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',

            /* ------------------ Safety ------------------ */
            'no-fallthrough': 'error',
            'no-implicit-coercion': 'error',
            'no-return-await': 'error',
        },
    },

    {
        ignores: ['dist/*', 'node_modules/*'],
    },
]);

