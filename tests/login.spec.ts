import {test} from '../support/fixtures';
import {expect} from '@playwright/test';
import {USER_EMAIL, USER_PASSWORD} from '../playwright.config';

test.describe('Login Page', () => {
    test('User can log in successfully and avatar is visible in header', async ({loginPage}) => {
        await loginPage.open();
        await loginPage.loginModal.login(USER_EMAIL, USER_PASSWORD);
        await expect(loginPage.header.locators.avatar).toBeVisible();
    });
});
