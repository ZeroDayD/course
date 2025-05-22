import {test} from '../support/fixtures';
import {expect} from '@playwright/test';

test.describe('Course Details Page', () => {
    const topicName = 'JavaScript';
    test.beforeEach(async ({searchPage}) => {
        await searchPage.open(topicName);
        await expect(searchPage.locators.courseCards.first()).toBeVisible();
    });

    test('User can open course details from search results', async ({searchPage, coursePage}) => {
        const courseId = 0;
        const courses = await searchPage.getCourseCards();

        expect(courses.length).toBeGreaterThan(0);

        const courseName = await courses[courseId].getCourseSlugFromLink();
        expect(await courses[courseId].getCourseName()).toContain(topicName);

        await courses[courseId].clickMoreInfoButton();
        await expect(coursePage.page).toHaveURL(coursePage.url + `/${courseName}`);
        expect(await coursePage.getTitleText()).toContain(topicName);
    });
});
