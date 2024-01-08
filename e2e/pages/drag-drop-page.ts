import { Locator, Page } from "@playwright/test";

export class DragAndDropPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly columnA: Locator;
    readonly columnB: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: 'Drag and Drop' });
        this.columnA = page.locator('#column-a');
        this.columnB = page.locator('#column-b');
    }

    async open() {
        await this.page.goto('/drag_and_drop');
    }

    async getColumnsWith(index: number) {
        return this.page.locator(`//*[@id='columns']/div[${index}]/header`).textContent();
    }
}
