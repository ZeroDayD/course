import {Page} from '@playwright/test';
import {FilterGroup} from "../utils/filter-category.enum";
import {FilterElement} from "./expandable-filter.element";

export class SearchFilters {
    locators = {
        sort: this.page.locator('.sort .select2-selection--single'),
        sortByBestMatchOptions: this.page.locator('.select2-results__option').nth(0),
        sortByNewestOptions: this.page.locator('.select2-results__option').nth(1),
    } as const;

    constructor(private readonly page: Page) {
    }

    async sortByBestMatch(): Promise<void> {
        await this.locators.sort.click();
        await this.locators.sortByBestMatchOptions.click();
    }

    async sortByNewest(): Promise<void> {
        await this.locators.sort.click();
        await this.locators.sortByNewestOptions.click();
    }

    filter(group: FilterGroup): FilterElement {
        return new FilterElement(this.page, group);
    }
}
