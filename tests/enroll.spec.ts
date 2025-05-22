import {test} from '../support/fixtures';
import {expect} from '@playwright/test';
import {USER_EMAIL, USER_PASSWORD} from '../playwright.config';

test.skip('Course Enrollment', () => {
    test.beforeEach(async ({coursePage}) => {
        await coursePage.open('javascript-application-programming-revised')
    });

    test('User can login and start learning a course', async ({coursePage, loginModal, topicLearnPage}) => {
        const topicName = 'JavaScript';

        await coursePage.header.clickLogin();
        await loginModal.login(USER_EMAIL, USER_PASSWORD);
        await coursePage.clickStartLearningButton();

        await expect(topicLearnPage.page).toHaveURL(/topic\/learn.*learning-outcomes/);
        expect(await topicLearnPage.getTitle()).toContain(topicName);
    });
});
