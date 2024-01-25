import { expect, test } from "@playwright/test";
import { ExitIntentPage } from '../pages/exit-intent-page';

test.describe('Exit Intent', () => {
    let exitIntentPage: ExitIntentPage;

    test.beforeEach(async ({ page }) => {
        exitIntentPage = new ExitIntentPage(page);
        await exitIntentPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/exit_intent');
    })

    test('has needed elements', async () => {
        await expect(exitIntentPage.h3).toBeVisible();
        await expect(exitIntentPage.mainText).toBeVisible();
    })

    test('mouse out of the viewport', async ({ page }) => {
        await page.locator('html').dispatchEvent('mouseleave');

        await expect(exitIntentPage.modalTitle).toBeVisible();
        await expect(exitIntentPage.modalBody).toBeVisible();
        await expect(exitIntentPage.modalCloseButton).toBeVisible();
    })

    test('close modal', async ({ page }) => {
        await page.locator('html').dispatchEvent('mouseleave');
        await exitIntentPage.closeModal();

        await expect(exitIntentPage.modalTitle).not.toBeVisible();
        await expect(exitIntentPage.modalBody).not.toBeVisible();
        await expect(exitIntentPage.modalCloseButton).not.toBeVisible();
    })
})
