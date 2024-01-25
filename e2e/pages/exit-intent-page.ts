import { Locator, Page } from "@playwright/test";

export class ExitIntentPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText: Locator;
    readonly modalTitle: Locator;
    readonly modalBody: Locator;
    readonly modalCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', {name: ('Exit Intent')});
        this.mainText = page.getByText('Mouse out of the viewport pane and see a modal window appear.');
        this.modalTitle = page.locator('.modal-title h3');
        this.modalBody = page.locator('.modal-body p');
        this.modalCloseButton = page.locator('div .modal-footer p');
    }

    async open() {
        await this.page.goto('/exit_intent');
    }

    async closeModal() {
        await this.modalCloseButton.click();
    }
}
