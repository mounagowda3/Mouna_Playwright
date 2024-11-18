import { Page } from '@playwright/test';
import locators from './locators';

export class LoginPage {
  constructor(private page: Page) { }

  async goToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(locators.usernameInput, username);
    await this.page.fill(locators.passwordInput, password);
    await this.page.click(locators.loginButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(locators.errorMessage);
  }
}
