import {BasePage} from './base.page';
import {Page} from '@playwright/test';

export class CoursePage extends BasePage {
    public static readonly baseUrl = '/course';

    constructor(page: Page) {
        super(page, CoursePage.baseUrl);
    }

    locators = {
        title: this.page.locator('h1.course-title'),
        shortDescription: this.page.locator('.course-description .l-info__description-short'),
        fullDescription: this.page.locator('.course-description .l-info__description-full'),
        startLearningButton: this.page.getByRole('link', {name: 'Start Learning'}).first(),
    } as const;

    async open(courseName?: string): Promise<void> {
        const finalUrl = courseName
            ? `${CoursePage.baseUrl}/${encodeURIComponent(courseName)}`
            : CoursePage.baseUrl;
        await this.page.goto(finalUrl);
    }

    async getTitleText(): Promise<string> {
        return this.locators.title.innerText();
    }

    async getShortDescriptionText(): Promise<string> {
        return this.locators.shortDescription.innerText();
    }

    async clickStartLearningButton(): Promise<void> {
        await this.locators.startLearningButton.click();
    }
}
