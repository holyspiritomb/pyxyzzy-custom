// @ts-check
import { defineConfig } from 'stylelint-define-config';

/// <reference types="@stylelint-types/stylelint-scss" />
/// <reference types="@stylelint-types/stylelint-stylistic" />
/// <reference types="@stylelint-types/stylelint-order" />

export default defineConfig({
  extends: ['stylelint-config-twbs-bootstrap'],
  rules: {
    // "@stylistic/indentation": null,
    "@stylistic/number-leading-zero": null,
    "@stylistic/declaration-colon-space-after": null,
    "@stylistic/string-quotes": null,
    // "@stylistic/declaration-colon-newline-after": null,
    "order/properties-order": null,
    "selector-no-qualifying-type": null,
    "selector-class-pattern": null,
    "selector-max-class": null,
    "color-hex-length": null,
    "selector-max-compound-selectors": null,
    "scss/dollar-variable-pattern": null,
    "scss/at-mixin-argumentless-call-parentheses": null,
    "selector-max-id": null,
    "length-zero-no-unit": null,
    "no-descending-specificity": null,
    "color-named": null,
    "no-duplicate-selectors": null,
    "declaration-no-important": null,
  }
})
