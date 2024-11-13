// tests/pages/authentication/login_page.ts

import { BasePage } from '../base/base_page';
import { Page } from '@playwright/test';

import { LoginLocators } from '../../locators/authentication/login_locators';

export class LoginPage extends BasePage {
  private locators: LoginLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginLocators(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.locators.usernameField.fill(username);
    await this.locators.passwordField.fill(password);
    await this.locators.submitButton.scrollIntoViewIfNeeded();
    await this.locators.submitButton.click();
  }

  async isLoginSuccessful(): Promise<boolean> {
    await this.locators.successMessage.waitFor({ timeout: 5000 });
    return await this.locators.successMessage.isVisible();
  }
}
