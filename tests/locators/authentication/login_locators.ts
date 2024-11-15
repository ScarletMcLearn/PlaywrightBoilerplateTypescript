import { Locator, Page } from '@playwright/test';

export class LoginLocators {
  public usernameField: Locator;
  public passwordField: Locator;
  public submitButton: Locator;
  public successMessage: Locator;

  constructor(page: Page) {
    this.usernameField = page.getByLabel('E-mail Address');
    this.passwordField = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Login' });
    this.successMessage = page.getByRole('heading', {
      name: 'Logged In Successfully',
    });
  }
}
