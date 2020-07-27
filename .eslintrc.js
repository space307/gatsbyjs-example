// const CURRENT_DIR = process.cwd();

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // tsconfigRootDir: CURRENT_DIR,
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    // Базовый набор правил eslint
    'eslint:recommended',
    // react
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // Отключаем правила из базового набора
    'plugin:@typescript-eslint/eslint-recommended',
    // Базовые правила для TypeScript
    'plugin:@typescript-eslint/recommended',
    // Правила TS, требующие инфо о типах
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // выключаем правила конфликтующие с prettier
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    // '@typescript-eslint/ban-ts-ignore': 'error', // deprecated
    // By default, these are banned: String, Boolean, Number, Object, Symbol
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 'off',
    // Require "x as number" instead of "<number>x" to avoid conflicts with JSX.
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    'no-async-promise-executor': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-irregular-whitespace': 'off',
    'no-useless-escape': 'off',
    'prettier/prettier': 'error',
    'react/jsx-no-bind': 'error',
    'react/no-unescaped-entities': 'error',
    eqeqeq: 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
