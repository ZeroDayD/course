import {BasePage} from './base.page';
import {Page} from '@playwright/test';

export class HomePage extends BasePage {
    private static readonly url = '/';

    locators = {
        // courseCards: this.page.locator('[data-testid*="search-course-card"]'),
    } as const;

    constructor(page: Page) {
        super(page, HomePage.url);
    }
}

