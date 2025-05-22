import {Page, expect} from '@playwright/test';

export class LoginModal {
    locators = {
        modal: this.page.locator('.login__right'),
        emailInput: this.page.locator('form[name="login-form"] input[name="email"]'),
        passwordInput: this.page.locator('form[name="login-form"] input[name="password"]'),
        submitButton: this.page.locator('form[name="login-form"] input[type="submit"]'),
    } as const;

    constructor(private readonly page: Page) {
    }

    async waitForVisible(): Promise<void> {
        await expect(this.locators.modal).toBeVisible();
    }

    async login(email: string, password: string): Promise<void> {
        await this.waitForVisible();
        await this.locators.emailInput.fill(email);
        await this.locators.passwordInput.fill(password);
        await this.locators.submitButton.click();
        // await this.page.waitForLoadState('networkidle');
    }
}
