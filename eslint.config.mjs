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

import playwright from "eslint-plugin-playwright";

export default [
  {
    ...playwright.configs["flat/recommended"],
    // files: ['tests/**'],
    files: ["**/tests/**/*.ts"],

    rules: {
      ...playwright.configs["flat/recommended"].rules,

      // Enforce assertion to be made in a test body
      "playwright/expect-expect": "error",

      // Enforces a maximum number of assertion calls in a test body
      // Set the max number of expects allowed in a single test (e.g., 5)
      "playwright/max-expects": ["warn", { max: 5 }],

      // Enforces a maximum depth to nested describe calls
      "playwright/max-nested-describe": ["error", { max: 2 }],

      // Enforce Playwright APIs to be awaited
      "playwright/missing-playwright-await": "error",

      // Disallow commented out tests
      "playwright/no-commented-out-tests": "warn",

      // Disallow calling expect conditionally
      "playwright/no-conditional-expect": "error",

      // Disallow conditional logic in tests
      "playwright/no-conditional-in-test": "error",

      // Disallow duplicate setup and teardown hooks
      "playwright/no-duplicate-hooks": "warn",

      // Disallow usage of element handles
      "playwright/no-element-handle": "error",

      // Disallow usage of page.$eval() and page.$$eval()
      "playwright/no-eval": "error",

      // Disallow usage of .only annotation
      "playwright/no-focused-test": "error",

      // Disallow usage of the { force: true } option
      "playwright/no-force-option": "error",

      // Disallow using getByTitle()
      "playwright/no-get-by-title": "warn",

      // Disallow setup and teardown hooks
      "playwright/no-hooks": "warn",

      // Disallow nested test.step() methods
      "playwright/no-nested-step": "error",

      // Disallow usage of the networkidle option
      "playwright/no-networkidle": "error",

      // Disallow usage of first(), last(), and nth() methods
      "playwright/no-nth-methods": "warn",

      // Disallow using page.pause()
      "playwright/no-page-pause": "error",

      // Disallow using raw locators
      "playwright/no-raw-locators": "warn",

      // Disallow specific matchers & modifiers
      "playwright/no-restricted-matchers": "warn",

      // Disallow usage of the .skip annotation
      "playwright/no-skipped-test": "error",

      // Disallow using expect outside of test blocks
      "playwright/no-standalone-expect": "error",

      // Prevent unsafe variable references in page.evaluate()
      "playwright/no-unsafe-references": "error",

      // Disallow unnecessary awaits for Playwright methods
      "playwright/no-useless-await": "warn",

      // Disallow usage of not matchers when a specific matcher exists
      "playwright/no-useless-not": "warn",

      // Disallow usage of page.waitForSelector()
      "playwright/no-wait-for-selector": "warn",

      // Disallow usage of page.waitForTimeout()
      "playwright/no-wait-for-timeout": "warn",

      // Suggest using the built-in comparison matchers
      "playwright/prefer-comparison-matcher": "warn",

      // Suggest using the built-in equality matchers
      "playwright/prefer-equality-matcher": "warn",

      // Prefer having hooks in a consistent order
      "playwright/prefer-hooks-in-order": "warn",

      // Suggest having hooks before any test cases
      "playwright/prefer-hooks-on-top": "warn",

      // Enforce lowercase test names
      "playwright/prefer-lowercase-title": "warn",

      // Suggest built-in locators over page.locator()
      "playwright/prefer-native-locators": "warn",

      // Suggest locators over page methods
      "playwright/prefer-locator": "warn",

      // Suggest using toStrictEqual()
      "playwright/prefer-strict-equal": "warn",

      // Suggest using toBe()
      "playwright/prefer-to-be": "warn",

      // Suggest using toContain()
      "playwright/prefer-to-contain": "warn",

      // Suggest using toHaveCount()
      "playwright/prefer-to-have-count": "warn",

      // Suggest using toHaveLength()
      "playwright/prefer-to-have-length": "warn",

      // Suggest using web first assertions
      "playwright/prefer-web-first-assertions": "error",

      // Require setup and teardown code to be within a hook
      "playwright/require-hook": "warn",

      // Require assertions to use expect.soft()
      "playwright/require-soft-assertions": "warn",

      // Require a message for toThrow()
      "playwright/require-to-throw-message": "warn",

      // Require test cases and hooks to be inside a test.describe block
      "playwright/require-top-level-describe": "warn",

      // Enforce valid describe() callback
      "playwright/valid-describe-callback": "error",

      // Require promises that have expectations in their chain to be valid
      "playwright/valid-expect-in-promise": "error",

      // Enforce valid expect() usage
      "playwright/valid-expect": "error",

      // Enforce valid titles
      "playwright/valid-title": "warn",
    },
  },
];
