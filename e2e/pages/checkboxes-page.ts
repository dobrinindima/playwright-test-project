import { Locator, Page } from '@playwright/test';

export class CheckboxesPage {
    readonly checkboxFirst: Locator;
    readonly checkboxSecond: Locator;
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.checkboxFirst = this.page.locator(`//form[@id='checkboxes']/input[1]`);
        this.checkboxSecond = this.page.locator(`//form[@id='checkboxes']/input[2]`);
    }

    async open() {
        await this.page.goto('/checkboxes');
    }

    async changeCheckboxState(index: number, state: boolean) {
        await this.page.locator(`//form[@id='checkboxes']/input[${index}]`).setChecked(state);
    }
}