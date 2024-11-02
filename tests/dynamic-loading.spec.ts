import { expect, test } from "@playwright/test";
import { DynamicLoadingPage } from '../pages/dynamic-loading-page';

test.describe('Dynamically Loaded Page Elements', () => {
    let dynamicLoadingPage: DynamicLoadingPage;

    test.beforeEach(async ({ page }) => {
        dynamicLoadingPage = new DynamicLoadingPage(page);
        await dynamicLoadingPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/dynamic_loading');
    })

    test('has needed elements', async () => {
        await expect(dynamicLoadingPage.h3).toBeVisible();
        await expect(dynamicLoadingPage.mainText1).toBeVisible();
        await expect(dynamicLoadingPage.mainText2).toBeVisible();
        await expect(dynamicLoadingPage.exampleLink1).toBeVisible();
        await expect(dynamicLoadingPage.exampleLink2).toBeVisible();
    })

    test('open Example 1 page', async ({ page }) => {
        await dynamicLoadingPage.exampleLink1.click();

        await expect(page).toHaveURL('/dynamic_loading/1');
        await expect(dynamicLoadingPage.h3).toBeVisible();
        await expect(dynamicLoadingPage.h4First).toBeVisible();
        await expect(dynamicLoadingPage.startButton).toBeVisible();
    })

    test('use Start button on the Example 1 page', async () => {
        await dynamicLoadingPage.openExample1();
        await dynamicLoadingPage.startButton.click();

        await expect(dynamicLoadingPage.loading).toBeVisible();
        await expect(dynamicLoadingPage.helloWorldText).toBeVisible();
    })

    test('open Example 2 page', async ({ page }) => {
        await dynamicLoadingPage.exampleLink2.click();

        await expect(page).toHaveURL('/dynamic_loading/2');
        await expect(dynamicLoadingPage.h3).toBeVisible();
        await expect(dynamicLoadingPage.h4Second).toBeVisible();
        await expect(dynamicLoadingPage.startButton).toBeVisible();
    })

    test('use Start button on the Example 2 page', async () => {
        await dynamicLoadingPage.openExample2();
        await dynamicLoadingPage.startButton.click();

        await expect(dynamicLoadingPage.loading).toBeVisible();
        await expect(dynamicLoadingPage.helloWorldText).toBeVisible();
    })
})
