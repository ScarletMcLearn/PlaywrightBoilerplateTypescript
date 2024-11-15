// import {test, expect} from '@playwright/test';
//
// test('dummy test that always passes', async ({ page }) => {
//     // Navigate to example.com
//     await page.goto('http://www.google.com');
//
//     // Check if the title is "Example Domain"
//     const title = await page.title();
//     expect.soft(title).toBe('Google');
// });
//
// test('example test', async ({ page }) => {
//     await page.goto('https://example.com');
//     // Your test code here
// });

import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/authentication/login_page';
import dotenv from 'dotenv';
import { log } from 'node:util';
import fs from 'fs';

dotenv.config();

test('dummy test that always passes', async ({ page }) => {
  // Navigate to example.com
  await page.goto('http://www.google.com');

  // Check if the title is "Example Domain"
  const title = await page.title();
  // expect(title).toBe('Google');
});

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  // Your test code here
});

test('should trigger expect-expect rule warning', async ({ page }) => {
  await page.goto('https://example.com');
  // No assertions in this test case, should trigger expect-expect warning
});

test('go to home page', async ({ page }) => {
  await page.goto('');

  // Fill in the username and password
  let username = process.env.QA_EMAIL;
  let password = process.env.QA_PASSWORD;
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);

  // Click the submit button
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify the URL
  await expect
    .soft(page)
    .toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
});

test.describe('login with correct credentials test', () => {
  test('user can log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo('');

    // Fill in the username and password
    let username = process.env.QA_EMAIL;
    let password = process.env.QA_PASSWORD;

    await loginPage.login(username, password);
    // await loginPage.getByLabel('Username').fill(username);
    // await page.getByLabel('Password').fill(password);

    // Click the submit button
    // await page.getByRole('button', { name: 'Submit' }).click();

    // Verify the URL
    await expect
      .soft(page)
      .toHaveURL(/https:\/\/american-equity-qa-uatx\.unqork\.io\/#\/display/);

    // Save cookies to a file
    const cookies = await page.context().cookies();
    fs.writeFileSync(
      'tests/fixtures/login/cookies.json',
      JSON.stringify(cookies, null, 2),
    );

    console.log(cookies);
  });

  test.describe('reuse login cookies test', () => {
    test.beforeEach(async ({ context }) => {
      // Load cookies from the file
      const cookies = JSON.parse(
        fs.readFileSync('tests/fixtures/login/cookies.json', 'utf8'),
      );
      await context.addCookies(cookies);
    });

    test('user can access the page with saved cookies', async ({ page }) => {
      const loginPage = new LoginPage(page);

      // Navigate directly to the authenticated page
      await loginPage.navigateTo('#/display');

      // Verify that the user is still logged in
      await expect
        .soft(page)
        .toHaveURL(/https:\/\/american-equity-qa-uatx\.unqork\.io\/#\/display/);
    });
  });
});
