import { Locator, Page } from "@playwright/test";

export class BrokenImagesPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly brokenImage1: Locator;
    readonly brokenImage2: Locator;
    readonly blankAvatar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', {name: ('Broken Images')});
        this.brokenImage1 = page.locator('//*[@src="asdf.jpg"]');
        this.brokenImage2 = page.locator('//*[@src="hjkl.jpg"]');
        this.blankAvatar = page.locator('//*[@src="img/avatar-blank.jpg"]');
    }

    async open() {
        await this.page.goto('/broken_images');
    }
}
