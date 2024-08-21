// @ts-check

import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from "@eslint/compat";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
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
      globals: {
        ...globals.es2020,
      },
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "@typescript-eslint/no-unsafe-function-type": 1,
      "@typescript-eslint/no-empty-object-type": 1,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-misused-promises": 1,
      "@typescript-eslint/no-this-alias": 0,
      "@typescript-eslint/no-unnecessary-type-assertion": 0,
      "@typescript-eslint/no-unsafe-argument": 0,
      "@typescript-eslint/no-unsafe-assignment": 0,
      "@typescript-eslint/no-unsafe-call": 1,
      "@typescript-eslint/no-unsafe-member-access": 0,
      "@typescript-eslint/no-unsafe-return": 0,
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          "caughtErrorsIgnorePattern": "^_",
          "argsIgnorePattern": "^[e|_]"
        },
      ],
      "@typescript-eslint/unbound-method": 1,
      "prefer-const": 1,
      "no-extra-semi": 1,
      "no-case-declarations": 0,
      "react-refresh/only-export-components": 0,
      "react/jsx-equals-spacing": 1,
      "react/jsx-indent": [1,2],
      "react/no-invalid-html-attribute": 2,
      'react/no-unsafe': 0,
      "react/prop-types": 1,
    },
  },
);
