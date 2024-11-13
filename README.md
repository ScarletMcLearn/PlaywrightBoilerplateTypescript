# Playwright Test Automation Framework

## Overview

This repository contains a Playwright test automation framework designed for end-to-end (E2E) testing of web
applications. The framework is organized into various directories to ensure modularity, reusability, and maintainability
of the code. Below is an explanation of the structure, its components, and how to work with the framework.

## Directory Structure

. ├── e2e/ │ └── authentication/ │ └── login_test.ts ├── locators/ │ └── authentication/ │ └── login_locators.ts ├──
pages/ │ └── authentication/ │ └── login_page.ts │ └── base/ │ └── base_locators.ts ├── playwright.config.ts ├──
package.json └── README.md

vbnet
Copy code

## Explanation of Directories and Files

### `e2e/`

This directory contains the end-to-end test files that verify the behavior of the application in a real browser
environment.

- **`authentication/login_test.ts`**: This is a test file that contains the Playwright test for the login functionality.
  It tests the behavior of the login page by interacting with it and verifying the expected outcomes.

### `locators/`

This directory holds the locators used to identify elements on the web page. Locators are organized by feature, ensuring
they are easy to maintain and reuse across multiple tests.

- **`authentication/login_locators.ts`**: This file contains all the locators specific to the login page. It defines
  selectors used to interact with the login form (username, password input, and login button).

### `pages/`

This directory contains the page objects, which define the actions and methods that interact with the elements on the
page. The page object model (POM) helps separate the test code from the logic of interacting with the UI.

- **`authentication/login_page.ts`**: This is a page object class for the login page. It encapsulates methods to perform
  actions on the login page, such as entering the username, password, and submitting the form.
- **`base/base_locators.ts`**: This file contains generic locators that can be used across various pages. It may include
  selectors for common elements, such as header, footer, and navigation.

### `playwright.config.ts`

This is the Playwright configuration file where the settings for running the tests (browser configurations, test
environment, etc.) are defined.

### `package.json`

This file defines the dependencies, scripts, and metadata for the project. It includes Playwright as a dependency and
may also include other tools for linting, testing, and reporting.

## Working with the Framework

### Running the Tests

To run the tests, use the following command:

```bash
npx playwright test --ui --grep "login with correct credentials test"
This command will run the test that matches the grep filter (in this case, a test related to logging in with correct credentials).

How to Import Files
You can import files from various directories by referencing them with relative paths. Below are some examples of how to import different files:

Importing a Page Object in a Test File: In your test files, you can import the login page object like this:

typescript
Copy code
import { LoginPage } from '../../pages/authentication/login_page';
Importing Locators in a Page Object: In your page objects, you can import locators like this:

typescript
Copy code
import { LoginLocators } from '../../locators/authentication/login_locators';
Importing Base Locators: If you need to use the base locators in your page objects, import them like this:

typescript
Copy code
import { BaseLocators } from '../../pages/base/base_locators';
Page Object Model (POM) Structure
Page Classes: Each page object represents a page or a section of the application. Page objects encapsulate methods that interact with elements (locators) on that page.
Locator Classes: These files hold the selectors (locators) used to identify the elements on the page. The locators are imported into the page object class, which then uses them to interact with the web elements.
Sample Test Flow
Initialization: In the login_test.ts, the test suite starts by initializing the LoginPage object.
Action: The test uses methods from the LoginPage object to interact with the login form (e.g., entering a username, entering a password, and clicking the login button).
Assertion: The test verifies whether the login was successful, typically by checking if a user is redirected to the dashboard or if an error message is displayed.
Dependencies
Playwright: The framework uses Playwright for browser automation.
TypeScript: TypeScript is used for better code quality and maintainability.
Installing Dependencies
Run the following command to install the required dependencies:

bash
Copy code
npm install
Conclusion
This framework is designed to be modular and scalable, following the Page Object Model (POM) pattern. The structure allows for easy maintenance, as changes to locators or page logic can be made in one place and automatically reflected across the tests.

Feel free to extend this framework by adding more pages, locators, and tests as needed.