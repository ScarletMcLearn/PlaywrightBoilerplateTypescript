import {test, expect} from '@playwright/test';

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