import { test, expect } from "@playwright/test";

test.describe('Broken Images', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/broken_images');
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })


    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/The Internet/);
    });

    test('has correct url', async ({ page }) => {
        await expect(page).toHaveURL('/broken_images');
    });

    test('has h3', async ({ page }) => {
        await expect(page.getByRole('heading')).toContainText('Broken Images');
    })

    test('there are broken images on the page', async ({ page }) => {
        await expect(await page.locator('//*[@src="asdf.jpg"]')).toBeVisible();
        await expect(await page.locator('//*[@src="hjkl.jpg"]')).toBeVisible();
    })

    test('there is the blank avatar on the page', async ({ page }) => {
        await expect(await page.locator('//*[@src="img/avatar-blank.jpg"]')).toBeVisible();
    })
})
