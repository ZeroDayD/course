import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import playwright from 'eslint-plugin-playwright';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser,
            sourceType: 'module',
            ecmaVersion: 'latest'
        },
        plugins: {
            '@typescript-eslint': eslintPluginTs,
            playwright
        },
        rules: {
            'no-else-return': ['error'],
            'no-var': ['error'],
            'prefer-const': ['error'],
            'max-lines-per-function': ['error', 40],
            camelcase: ['warn'],
            'max-depth': ['error', 3],
            'max-len': [
                'warn',
                {
                    code: 120,
                    ignorePattern: '^import .*',
                },
            ],
            '@typescript-eslint/no-duplicate-enum-values': ['error'],
            '@typescript-eslint/no-explicit-any': ['warn'],
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-unused-expressions': ['off'],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: ['parameter', 'variable'],
                    leadingUnderscore: 'require',
                    format: ['camelCase'],
                    modifiers: ['unused'],
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        }
    }
];
