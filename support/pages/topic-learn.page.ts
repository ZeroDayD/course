import {Page} from "@playwright/test";

export class TopicLearnPage {
    public readonly url

    constructor(public page: Page) {
        this.url = '/topic/learn';
    }

    locators = {
        headCourseName: this.page.locator('.head__topic'),
    } as const;

    async getTitle(): Promise<string> {
        return await this.locators.headCourseName.innerText();
    }
}
