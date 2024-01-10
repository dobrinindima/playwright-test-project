import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly h1: Locator;
    readonly h2: Locator;
    readonly aBTesting: Locator;
    readonly addRemoveElements: Locator;
    readonly basicAuth: Locator;
    readonly brokenImages: Locator;
    readonly challengingDom: Locator;
    readonly checkboxes: Locator;
    readonly contextMenu: Locator;
    readonly digestAuthentication: Locator;
    readonly disappearingElements: Locator;
    readonly dragAndDrop: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h1 = page.getByRole('heading', { name: ('Welcome to the-internet') });
        this.h2 = page.getByRole('heading', { name: ('Available Examples') });
        this.aBTesting = page.getByRole('link', { name: ('A/B Testing') });
    }

    async open() {
        await this.page.goto('/');
    }
}
