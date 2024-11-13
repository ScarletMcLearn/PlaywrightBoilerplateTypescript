// tests/pages/authentication/login_page.ts

import { BasePage } from '../base/base_page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  private usernameField = this.page.getByLabel('Username');
  private passwordField = this.page.getByLabel('Password');
  private submitButton = this.page.getByRole('button', { name: 'Submit' });
  private successMessageSelector =
    'role=heading[name="Logged In Successfully"]';

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }

  async isLoginSuccessful(): Promise<boolean> {
    const successMessage = await this.page.isVisible(
      this.successMessageSelector,
    );
    console.log('###############2');
    console.log(successMessage);
    console.log('!!!!!!!!!!!!!!!!');
    return successMessage;
  }
}
