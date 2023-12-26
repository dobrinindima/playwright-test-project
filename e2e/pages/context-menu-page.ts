import { Locator, Page } from "@playwright/test";

export class ContextMenuPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText1: Locator;
    readonly mainText2: Locator;
    readonly hotSpot: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: 'Context Menu' });
        this.mainText1 = page.getByText('Context menu items are custom additions that appear in the right-click menu.');
        this.mainText2 = page.getByText('Right-click in the box below to see one called \'the-internet\'. When you click it, it will trigger a JavaScript alert.');
        this.hotSpot = page.locator('#hot-spot');
    }

    async goto() {
        await this.page.goto('/context_menu');
    }
}
