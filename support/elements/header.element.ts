import {Page} from '@playwright/test';

export class Header {
    locators = {
        searchInput: this.page.locator('form#header-search-form input#autocomplete'),
        submitButton: this.page.locator('#search_icon'),
        autocompleteDropdown: this.page.locator('#autocomp--new'),
        popularTerms: this.page.locator('.autocomplete--search-terms a'),
        categories: this.page.locator('.autocomplete--search-categories a'),
        viewAllResults: this.page.locator('.view-all-results'),
        loginButton: this.page.locator('a.login-button'),
        avatar: this.page.locator('.head__u-avatar img').first(),
    } as const;

    constructor(private readonly page: Page) {
    }

    async fillSearchInput(term: string): Promise<void> {
        await this.locators.searchInput.fill(term);
    }

    async clickSubmitButton(): Promise<void> {
        await this.locators.submitButton.click();
    }

    async clickLogin(): Promise<void> {
        await this.locators.loginButton.click();
    }
}
