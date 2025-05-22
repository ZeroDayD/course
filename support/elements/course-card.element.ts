import {Locator} from '@playwright/test';

export class CourseCard {
    constructor(private readonly root: Locator) {
    }

    locators = {
        title: this.root.locator('h3'),
        moreInfoButton: this.root.locator('a.card__more.card__more--mobile'),
        startLearningButton: this.root.locator('a.card__start.add-course-id'),
    } as const;

    async getCourseName(): Promise<string> {
        return this.locators.title.innerText();
    }

    async clickMoreInfoButton(): Promise<void> {
        await this.locators.moreInfoButton.first().click();
    }

    async clickStartLearningButton(): Promise<void> {
        await this.locators.startLearningButton.first().click();
    }

    async getCourseSlugFromLink(): Promise<string> {
        const href = await this.locators.moreInfoButton.getAttribute('href');
        if (!href) throw new Error('More Info button has no href');

        const match = href.match(/\/course\/([^\/?#]+)/);
        if (!match) throw new Error(`Unexpected href format: ${href}`);

        return match[1];
    }
}
