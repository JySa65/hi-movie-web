const path = require('node:path');

const RULES = {
  OFF: 0,
  WARN: 1,
  ERROR: 2
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [`${path.join(__dirname, 'tsconfig.json')}`]
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [RULES.ERROR, {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
    'react/react-in-jsx-scope': RULES.OFF,
    '@typescript-eslint/strict-boolean-expressions': RULES.OFF,
    '@typescript-eslint/no-unused-vars': [
      RULES.ERROR,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ]
  }
};
