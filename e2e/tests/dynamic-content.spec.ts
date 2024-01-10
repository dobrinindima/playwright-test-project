import { expect, test } from "@playwright/test";
import { DynamicContentPage } from '../pages/dynamic-content-page';

test.describe('Dynamic Content', () => {
    let dynamicContentPage: DynamicContentPage;

    test.beforeEach(async ({ page }) => {
        dynamicContentPage = new DynamicContentPage(page);
        await dynamicContentPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/dynamic_content');
    })

    test('has needed elements', async () => {
        await expect(dynamicContentPage.h3).toBeVisible();
        await expect(dynamicContentPage.mainText1).toBeVisible();
        await expect(dynamicContentPage.mainText2).toBeVisible();
        await expect(dynamicContentPage.mainText3).toBeVisible();
        await expect(dynamicContentPage.clickHereButton).toBeVisible();
        await expect(dynamicContentPage.contentColumns).toBeVisible();
    })

    test('check unique content', async ({ page }) => {
        const oldTexts = await dynamicContentPage.saveColumsText();

        await page.reload();

        const newTests = await dynamicContentPage.saveColumsText();

        expect(await dynamicContentPage.arraysHasTheSameElements(oldTexts, newTests)).toBeFalsy();
    })

    test('check static content',async ({ page }) => {
        await dynamicContentPage.clickHereButton.click();
        
        const oldTexts = await dynamicContentPage.saveColumsText();

        await page.reload();
        
        const newTests = await dynamicContentPage.saveColumsText();

        expect(await dynamicContentPage.arraysHasTheSameElements(oldTexts, newTests)).toBeTruthy();
    })
})
