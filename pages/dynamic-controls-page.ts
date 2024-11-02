import { Locator, Page } from "@playwright/test";

export class DynamicControlsPage {
    readonly page: Page;
    readonly h4: Locator;
    readonly mainText: Locator;
    readonly removeAddText: Locator;
    readonly addButton: Locator;
    readonly message: Locator;
    readonly loading: Locator;
    readonly checkbox: Locator;
    readonly aCheckboxText: Locator;
    readonly removeButton: Locator;
    readonly enableDisableText: Locator;
    readonly inputField: Locator;
    readonly enableButton: Locator;
    readonly disableButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h4 = page.getByRole('heading', { name: ('Dynamic Controls') });
        this.mainText = page.getByText('This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.');
        this.removeAddText = page.getByRole('heading', { name: ('Remove/add') });
        this.addButton = page.getByRole('button', { name: ('Add') });
        this.message = page.locator('p#message');
        this.loading = page.locator('div#loading');
        this.checkbox = page.locator('#checkbox input');
        this.aCheckboxText = page.getByText(' A checkbox');
        this.removeButton = page.getByRole('button', { name: ('Remove') });
        this.enableDisableText = page.getByRole('heading', { name: ('Enable/disable') });
        this.inputField = page.locator('form#input-example input');
        this.enableButton = page.getByRole('button', { name: ('Enable') });
        this.disableButton = page.getByRole('button', { name: ('Disable') });
    }

    async open() {
        await this.page.goto('/dynamic_controls');
    }
}
