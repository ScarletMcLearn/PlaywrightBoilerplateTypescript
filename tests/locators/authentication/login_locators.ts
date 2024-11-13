import { Locator, Page } from '@playwright/test';

export class LoginLocators {
  public usernameField: Locator;
  public passwordField: Locator;
  public submitButton: Locator;
  public successMessage: Locator;

  constructor(page: Page) {
    this.usernameField = page.locator('input[name="username"]');
    this.passwordField = page.locator('input[name="password"]');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.getByRole('heading', {
      name: 'Logged In Successfully',
    });
  }
}
