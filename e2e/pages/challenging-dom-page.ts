import { Locator, Page } from "@playwright/test";

export class ChallengingDom {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText: Locator;
    readonly editButton: Locator;
    readonly deleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: ('Challenging DOM') });
        this.mainText = page.getByText('The hardest part in automated web testing is finding the best locators (e.g., ones that well named, unique, and unlikely to change).');
        this.editButton = page.getByRole('link', {name: ('edit')}).first();
        this.deleteButton = page.getByRole('link', {name: ('delete')}).first();
    }

    async open() {
        await this.page.goto('/challenging_dom');
    }
}
