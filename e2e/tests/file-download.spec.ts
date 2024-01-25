import { expect, test } from "@playwright/test";
import { FileDownloaderPage } from '../pages/file-download-page';
import exp from "constants";

test.describe('File Downloader', () => {
    let fileDownloaderPage: FileDownloaderPage;

    test.beforeEach(async ({ page }) => {
        fileDownloaderPage = new FileDownloaderPage(page);
        await fileDownloaderPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/download');
    })

    test('has needed elements', async () => {
        await expect(fileDownloaderPage.h3).toBeVisible();
    })

    test('download all files', async ({ page }) => {
        let elemnts = await page.$$('.example a');

        for (let element of elemnts) {
            let elementName = await element.textContent();

            if (elementName !== null) {
                const downloadPromise = page.waitForEvent('download');
                await page.locator(`//a[text()='${elementName}']`).click();
                const download = await downloadPromise;

                await download.saveAs('../' + download.suggestedFilename());
                expect(download.suggestedFilename()).toBe(elementName);
            }
        }
    })
})
