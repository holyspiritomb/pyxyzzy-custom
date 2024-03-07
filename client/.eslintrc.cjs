module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/ban-types": 1,
    "no-extra-semi": 1,
  },
  settings: {
      "react": {
          "version": "detect"
      }
  }
}
