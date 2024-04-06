// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  reactRecommended,
  reactJsxRuntime,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        }
      },
    },
    rules: {
      "@typescript-eslint/ban-types": 1,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-misused-promises": 1,
      "@typescript-eslint/no-this-alias": 0,
      "@typescript-eslint/no-unnecessary-type-assertion": 0,
      "@typescript-eslint/no-unsafe-argument": 1,
      "@typescript-eslint/no-unsafe-assignment": 1,
      "@typescript-eslint/no-unsafe-call": 1,
      "@typescript-eslint/no-unsafe-member-access": 0,
      "@typescript-eslint/no-unsafe-return": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "prefer-const": 1,
      "no-extra-semi": 1,
      "no-case-declarations": 0,
      "react-refresh/only-export-components": 1,
      "react/jsx-equals-spacing": 1,
      "react/jsx-indent": [1,2],
      "react/no-invalid-html-attribute": 2,
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
);
