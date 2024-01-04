import { test, expect } from '@playwright/test';
import { DisappearingElementsPage } from '../pages/disappearing-elements-page';

test.describe('Disappearing Elements', async () => {
    test.setTimeout(24000);
    let disappearingElementsPage: DisappearingElementsPage;

    test.beforeEach(async ({ page }) => {
        disappearingElementsPage = new DisappearingElementsPage(page);
        await disappearingElementsPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet')
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/disappearing_elements')
    })

    test('has all needed elements', async () => {
        await expect(disappearingElementsPage.h3).toBeVisible();
        await expect(disappearingElementsPage.mainText).toBeVisible();
    })

    test('Gallery element is appeared', async () => {
        await expect(async () => {
            await disappearingElementsPage.open();
            await expect(disappearingElementsPage.galleryButton).toBeVisible();
        }).toPass();

        await disappearingElementsPage.allEmentsVisible();
    })

    test('Gallery element is disappeared', async () => {
        await expect(async () => {
            await disappearingElementsPage.open();
            await expect(disappearingElementsPage.galleryButton).toBeHidden();
        }).toPass();

        await disappearingElementsPage.allEmentsVisible();
    })
})
