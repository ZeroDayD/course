import {test} from '../support/fixtures';
import {expect} from '@playwright/test';

test.describe('Course Search & Filtering', () => {
    test.beforeEach(async ({homePage}) => {
        await homePage.open();
    });

    test('User can search for courses and see results', async ({homePage, searchPage}) => {
        const topicName = 'JavaScript';

        await homePage.header.fillSearchInput(topicName);
        await homePage.header.clickSubmitButton();

        await expect(searchPage.page).toHaveURL(searchPage.url + `?query=${topicName}`);
        await expect(searchPage.locators.courseCards.first()).toBeVisible();
        await searchPage.searchFilters.sortByNewest();

        expect(await searchPage.getTitle()).toContain(topicName);
        // TODO: report a bug — results don’t include topic name after sorting
        // await searchPage.searchFilters.filter(FilterGroup.LEVEL).expand();
        // await searchPage.searchFilters.filter(FilterGroup.LEVEL).checkByLabel('Beginner');
    });
});
