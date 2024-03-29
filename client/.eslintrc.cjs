module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'react-hooks', 'react-refresh'],
  rules: {
    "@typescript-eslint/ban-types": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-misused-promises": 1,
    "@typescript-eslint/no-this-alias": 1,
    "@typescript-eslint/no-unnecessary-type-assertion": 0,
    "@typescript-eslint/no-unsafe-argument": 1,
    "@typescript-eslint/no-unsafe-assignment": 1,
    "@typescript-eslint/no-unsafe-call": 1,
    "@typescript-eslint/no-unsafe-member-access": 1,
    "@typescript-eslint/no-unsafe-return": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "prefer-const": 1,
    "no-extra-semi": 1,
    "no-case-declarations": 1,
    "react-refresh/only-export-components": 1
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
}
