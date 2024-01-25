import { Locator, Page } from "@playwright/test";

export class FileDownloaderPage {
    readonly page: Page;
    readonly h3: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', {name: ('File Downloader')});
    }

    async open() {
        await this.page.goto('/download');
    }
}
