import {Page} from '@playwright/test';
import {Header} from '../elements/header.element';

export abstract class BasePage {
    readonly header: Header;

    constructor(public page: Page, public url: string) {
        this.header = new Header(page);
    }

    async open(): Promise<void> {
        await this.page.goto(this.url);
    }
}
