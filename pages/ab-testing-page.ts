import { Locator, Page } from "@playwright/test";

export class ABTestingPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: ('A/B Test') });
        this.mainText = page.getByText('Also known as split testing. This is a way in which businesses are able to simultaneously');
    }

    async open() {
        await this.page.goto('/abtest');
    }
}
