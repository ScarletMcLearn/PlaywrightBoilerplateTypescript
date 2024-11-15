// import { Page } from '@playwright/test';
//
// export class BasePage {
//   protected page: Page;
//
//   constructor(page: Page) {
//     this.page = page;
//   }
//
//   async navigateTo(url: string) {
//     await this.page.goto(url);
//   }
// }

import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url, {
      waitUntil: 'commit',
      // 'domcontentloaded',
      // 'networkidle',
    });
    // await this.page.waitForLoadState('load');
    // await this.page.waitForNavigation();

    // await this.page.waitForLoadState('load');

    // await this.page.waitForSelector('body');
    // // await this.page.waitForTimeout(5000); // Wait for 5 seconds

    const body = this.page.locator('body'); // Use a locator for the body element
    await body.waitFor();
  }

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async type(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  async getText(selector: string): Promise<string> {
    return this.page.textContent(selector);
  }

  async isVisible(selector: string): Promise<boolean> {
    return this.page.isVisible(selector);
  }

  async waitForSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }
}
