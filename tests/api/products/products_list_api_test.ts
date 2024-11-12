import {test, expect} from '@playwright/test';

test('dummy test that always passes', async ({ page }) => {
    // Navigate to example.com
    await page.goto('http://www.google.com');

    // Check if the title is "Example Domain"
    const title = await page.title();
    expect.soft(title).toBe('Google');
});