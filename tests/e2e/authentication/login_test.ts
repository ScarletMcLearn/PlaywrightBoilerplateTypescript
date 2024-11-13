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
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

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
    await loginPage.login('student', 'Password123');

    // Add assertions to verify successful login
    // Verify successful login
    const isLoginSuccessful = await loginPage.isLoginSuccessful();
    expect.soft(isLoginSuccessful).toBe(true);
  });
});
