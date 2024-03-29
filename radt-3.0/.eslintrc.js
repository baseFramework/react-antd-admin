module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'cypress',
    'eslint-plugin-chai-friendly',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  settings: { react: { version: 'detect' } },
  rules: {
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': 2,
    'react/react-in-jsx-scope': 'off',
  },
};
