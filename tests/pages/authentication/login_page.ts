// tests/pages/authentication/login_page.ts

import { BasePage } from '../base/base_page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  private usernameField: Locator;
  private passwordField: Locator;
  private submitButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameField = page.locator('input[name="username"]');
    this.passwordField = page.locator('input[name="password"]');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.getByRole('heading', {
      name: 'Logged In Successfully',
    });
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }

  async isLoginSuccessful(): Promise<boolean> {
    await this.successMessage.waitFor({ timeout: 5000 });
    return await this.successMessage.isVisible();
  }
}
