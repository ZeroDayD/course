import {BasePage} from './base.page';
import {Page} from '@playwright/test';
import {LoginModal} from "../elements/login.modal";

export class LoginPage extends BasePage {
    private static readonly url = '/login';
    readonly loginModal: LoginModal;

    constructor(page: Page) {
        super(page, LoginPage.url);
        this.loginModal = new LoginModal(page);
    }
}

