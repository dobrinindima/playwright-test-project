import { Locator, Page } from "@playwright/test";

export class AddRemoveElementsPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly addElementButton: Locator;
    readonly deleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: ('Add/Remove Elements') });
        this.addElementButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteButton = page.getByRole('button', { name: 'Delete' });
    }

    async open() {
        await this.page.goto('/add_remove_elements/');
    }
}
