// tests/pages/authentication/login_page.ts

import { BasePage } from '../base/base_page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async isLoginSuccessful(): Promise<boolean> {
    return this.page.isVisible('role=heading[name="Logged In Successfully"]');
  }
}
