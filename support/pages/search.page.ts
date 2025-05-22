import {BasePage} from './base.page';
import {Page} from '@playwright/test';
import {CourseCard} from '../elements/course-card.element';
import {SearchFilters} from "../elements/filters-block.element";

export class SearchPage extends BasePage {
    public static readonly baseUrl = '/courses';
    readonly searchFilters: SearchFilters;

    constructor(page: Page) {
        super(page, SearchPage.baseUrl);
        this.searchFilters = new SearchFilters(page);
    }

    locators = {
        fullHeadingText: this.page.locator('.heading h2'),
        querySearch: this.page.locator('.heading .query-search').first(),
        courseCards: this.page.locator('.card.card--wide')
    } as const;

    async open(query?: string): Promise<void> {
        const finalUrl = query ? `${SearchPage.baseUrl}?query=${encodeURIComponent(query)}` : SearchPage.baseUrl;
        await this.page.goto(finalUrl);
    }

    async getCourseCards(): Promise<CourseCard[]> {
        const count = await this.locators.courseCards.count();
        const cards: CourseCard[] = [];
        for (let i = 0; i < count; i++) {
            const card = this.locators.courseCards.nth(i);
            cards.push(new CourseCard(card));
        }
        return cards;
    }

    async getTitle(): Promise<string> {
        return await this.locators.fullHeadingText.innerText();
    }
}
