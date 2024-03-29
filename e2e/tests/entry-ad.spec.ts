import { expect, test } from "@playwright/test";
import { EntryAdPage } from '../pages/entry-ad-page';

test.describe('Entry Ad', () => {
    let entryAdPage: EntryAdPage;

    test.beforeEach(async ({ page }) => {
        entryAdPage = new EntryAdPage(page);
        await entryAdPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/entry_ad');
    })

    test('has needed elements', async () => {
        await expect(entryAdPage.h3).toBeVisible();
        await expect(entryAdPage.mainText1).toBeVisible();
        await expect(entryAdPage.mainText2).toBeVisible();
        await expect(entryAdPage.mainText3).toBeVisible();
        await expect(entryAdPage.restartAd).toBeVisible();
        await expect(entryAdPage.modal).toBeVisible();
        await expect(entryAdPage.modalTitle).toBeVisible();
        await expect(entryAdPage.modalBody).toBeVisible();
        await expect(entryAdPage.modalCloseButton).toBeVisible();
    })

    test('modas has correct title', async () => {
        await expect(entryAdPage.modalTitle).toHaveText('This is a modal window');
    })

    test('modal has correct body', async () => {
        const body = `
        It's commonly used to encourage a user to take an action 
        (e.g., give their e-mail address to sign up for something or disable their ad blocker).
        `
        await expect(entryAdPage.modalBody).toHaveText(body);
    })

    test('close modal', async () => {
        await entryAdPage.closeAd();

        await expect(entryAdPage.modal).not.toBeVisible();
    })

    test.skip('restart Ad', async () => {
        await entryAdPage.closeAd();
        await entryAdPage.reEnableAd();

        await expect(entryAdPage.modal).toBeVisible();
    })
})
