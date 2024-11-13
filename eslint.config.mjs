// // import globals from "globals";
// // import pluginJs from "@eslint/js";
// // import tseslint from "typescript-eslint";
// //
// //
// // /** @type {import('eslint').Linter.Config[]} */
// // export default [
// //   {files: ["**/*.{js,mjs,cjs,ts}"]},
// //   {languageOptions: { globals: globals.browser }},
// //   pluginJs.configs.recommended,
// //   ...tseslint.configs.recommended,
// // ];
//
//
//
// //  V2
// import playwright from 'eslint-plugin-playwright'
//
// export default [
//   {
//     ...playwright.configs['flat/recommended'],
//     files: ['tests/**'],
//     rules: {
//       ...playwright.configs['flat/recommended'].rules,
//       // Customize Playwright rules
//       // ...
//     },
//   },
// ]

import playwright from 'eslint-plugin-playwright';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/tests/**/*.ts'],

    // Set the parser for TypeScript
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    // Explicitly define the plugins used
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      playwright,
    },

    // Include both Playwright and TypeScript rules
    rules: {
      ...typescriptPlugin.configs.recommended.rules, // TypeScript rules
      ...playwright.configs['flat/recommended'].rules, // Playwright rules

      // Additional Playwright-specific rules (or overrides)
      'playwright/expect-expect': 'error',
      'playwright/max-expects': ['warn', { max: 5 }],
      'playwright/max-nested-describe': ['error', { max: 2 }],
      'playwright/missing-playwright-await': 'error',
      'playwright/no-commented-out-tests': 'warn',
      'playwright/no-conditional-expect': 'error',
      'playwright/no-conditional-in-test': 'error',
      'playwright/no-duplicate-hooks': 'warn',
      'playwright/no-element-handle': 'error',
      'playwright/no-eval': 'error',
      'playwright/no-focused-test': 'error',
      'playwright/no-force-option': 'error',
      'playwright/no-get-by-title': 'warn',
      'playwright/no-hooks': 'warn',
      'playwright/no-nested-step': 'error',
      'playwright/no-networkidle': 'error',
      'playwright/no-nth-methods': 'warn',
      'playwright/no-page-pause': 'error',
      'playwright/no-raw-locators': 'warn',
      'playwright/no-restricted-matchers': 'warn',
      'playwright/no-skipped-test': 'error',
      'playwright/no-standalone-expect': 'error',
      'playwright/no-unsafe-references': 'error',
      'playwright/no-useless-await': 'warn',
      'playwright/no-useless-not': 'warn',
      'playwright/no-wait-for-selector': 'warn',
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/prefer-comparison-matcher': 'warn',
      'playwright/prefer-equality-matcher': 'warn',
      'playwright/prefer-hooks-in-order': 'warn',
      'playwright/prefer-hooks-on-top': 'warn',
      'playwright/prefer-lowercase-title': 'warn',
      'playwright/prefer-native-locators': 'warn',
      'playwright/prefer-locator': 'warn',
      'playwright/prefer-strict-equal': 'warn',
      'playwright/prefer-to-be': 'warn',
      'playwright/prefer-to-contain': 'warn',
      'playwright/prefer-to-have-count': 'warn',
      'playwright/prefer-to-have-length': 'warn',
      'playwright/prefer-web-first-assertions': 'error',
      'playwright/require-hook': 'warn',
      'playwright/require-soft-assertions': 'warn',
      'playwright/require-to-throw-message': 'warn',
      'playwright/require-top-level-describe': 'warn',
      'playwright/valid-describe-callback': 'error',
      'playwright/valid-expect-in-promise': 'error',
      'playwright/valid-expect': 'error',
      'playwright/valid-title': 'warn',
    },
  },
];
