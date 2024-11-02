import { Locator, Page, expect } from "@playwright/test";

export class DisappearingElementsPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText: Locator;
    readonly homeButton: Locator;
    readonly aboutButton: Locator;
    readonly contactUsButton: Locator;
    readonly portfolioButton: Locator;
    readonly galleryButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: 'Disappearing Elements' });
        this.mainText = page.getByText('This example demonstrates when elements on a page change by disappearing/reappearing on each page load.');
        this.homeButton = page.getByText('Home');
        this.aboutButton = page.getByText('About');
        this.contactUsButton = page.getByText('Contact Us');
        this.portfolioButton = page.getByText('Portfolio');
        this.galleryButton = page.getByText('Gallery');
    }

    async open() {
        await this.page.goto('/disappearing_elements');
    }

    async allEmentsVisible() {
        await expect(this.h3).toBeVisible();
        await expect(this.mainText).toBeVisible();
        await expect(this.homeButton).toBeVisible();
        await expect(this.aboutButton).toBeVisible();
        await expect(this.contactUsButton).toBeVisible();
        await expect(this.portfolioButton).toBeVisible();
    }
}
