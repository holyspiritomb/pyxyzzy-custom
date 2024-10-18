import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  reactPlugin.configs.flat["recommended"],
  reactPlugin.configs.flat["jsx-runtime"],
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-refresh': reactRefresh,
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.eslint.json'],
        // ecmaFeatures: {
          // jsx: true,
        // }
      },
      globals: {
        ...globals.es2020,
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-this-alias": 0,
      "@typescript-eslint/no-unnecessary-type-assertion": 0,
      "@typescript-eslint/no-unsafe-argument": 0,
      "@typescript-eslint/no-unsafe-assignment": 0,
      "@typescript-eslint/no-unsafe-member-access": 0,
      "@typescript-eslint/no-unsafe-return": 0,
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          "caughtErrorsIgnorePattern": "^_",
          "argsIgnorePattern": "^[e|_]"
        },
      ],
      // "no-extra-semi": 1,
      "no-case-declarations": 0,
      "react/jsx-equals-spacing": 1,
      "react/jsx-indent": [1,2],
      "react/no-invalid-html-attribute": 2,
    },
  },
);
