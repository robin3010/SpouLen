module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended-type-checked',
    '@feature-sliced',
    // "plugin:@conarti/feature-sliced/recommended",
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', '@typescript-eslint', "@conarti/feature-sliced"],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-unused-vars': 1,
    'import/no-default-export': 2,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    "import/no-internal-modules": 0,
    "@conarti/feature-sliced/layers-slices": 2,
    "@conarti/feature-sliced/absolute-relative": 2,
    "@conarti/feature-sliced/public-api": 0,
  },
}
