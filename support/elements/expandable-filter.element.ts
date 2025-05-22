import {expect, Locator, Page} from '@playwright/test';
import {Expandable} from "./expandable";
import {FilterGroup} from "../utils/filter-category.enum";

export class FilterElement implements Expandable {
    readonly locators: {
        container: Locator;
        toggle: Locator;
        mainList: Locator;
        checkboxes: Locator;
        labels: Locator;
    };

    constructor(readonly page: Page, readonly group: FilterGroup) {
        const container = page.locator(`.filter[data-url-var="${group}"]`);
        this.locators = {
            container,
            toggle: container.locator('.filter-heading3'),
            mainList: container.locator('ul.main-list'),
            checkboxes: container.locator('ul.main-list input[type="checkbox"]'),
            labels: container.locator('ul.main-list label'),
        } as const;
    }

    async expand(): Promise<void> {
        if (await this.locators.mainList.isHidden()) {
            await this.locators.toggle.click();
            await expect(this.locators.mainList).toBeVisible();
        }
    }

    async collapse(): Promise<void> {
        if (await this.locators.mainList.isVisible()) {
            await this.locators.toggle.click();
        }
    }

    async checkByLabel(labelText: string): Promise<void> {
        await this.expand();

        const label = this.locators.labels.filter({hasText: labelText});
        const forAttr = await label.getAttribute('for');

        if (!forAttr) throw new Error(`Label "${labelText}" does not have a 'for' attribute`);

        const checkbox = this.page.locator(`#${forAttr}`);
        if (!(await checkbox.isChecked())) {
            await label.scrollIntoViewIfNeeded();
            await expect(label).toBeVisible();
            await label.click();
        }
    }
}
