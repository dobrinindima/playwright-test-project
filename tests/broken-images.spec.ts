import { test, expect } from "@playwright/test";
import { BrokenImagesPage } from '../pages/broken-images-page';

test.describe('Broken Images', () => {
    let brokenImagesPage: BrokenImagesPage;

    test.beforeEach(async ({ page }) => {
        brokenImagesPage = new BrokenImagesPage(page);
        await brokenImagesPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/The Internet/);
    });

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/broken_images');
    });

    test('has needed elements', async () => {
        await expect(brokenImagesPage.h3).toBeVisible();
        await expect(brokenImagesPage.brokenImage1).toBeVisible();
        await expect(brokenImagesPage.brokenImage2).toBeVisible();
        await expect(brokenImagesPage.blankAvatar).toBeVisible();
    })
})
