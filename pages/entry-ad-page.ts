import { Locator, Page } from "@playwright/test";

export class EntryAdPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText1: Locator;
    readonly mainText2: Locator;
    readonly mainText3: Locator;
    readonly restartAd: Locator;
    readonly modal: Locator;
    readonly modalTitle: Locator;
    readonly modalBody: Locator;
    readonly modalCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: ('Entry Ad') });
        this.mainText1 = page.getByText('Displays an ad on page load.');
        this.mainText2 = page.getByText('If closed, it will not appear on subsequent page loads.');
        this.mainText3 = page.getByText('To re-enable it, ');
        this.restartAd = page.locator('p #restart-ad');
        this.modal = page.locator('div .modal');
        this.modalTitle = page.locator('.modal-title h3');
        this.modalBody = page.locator('.modal-body p');
        this.modalCloseButton = page.locator('div .modal-footer p');
    }

    async open() {
        await this.page.goto('/entry_ad');
    }

    async reEnableAd() {
        await this.restartAd.click();
    }

    async closeAd() {
        await this.modalCloseButton.click();
    }
}
