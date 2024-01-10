import { Locator, Page } from '@playwright/test';

export class DropdownListPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly dropdown: Locator;
    readonly selectedOption: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: ('Dropdown List') });
        this.dropdown = page.locator('#dropdown');
        this.selectedOption = page.locator('//option[@selected="selected"]');
    }

    async open() {
        await this.page.goto('/dropdown');
    }

    async selectOption(option: string) {
        await this.dropdown.selectOption(option);
    }
}
