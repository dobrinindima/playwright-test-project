import { test, expect } from '@playwright/test';
import { DigestAuthPage } from '../pages/digest-auth-page';

test.describe('Digest Auth', () => {
    let digestAuthPage: DigestAuthPage;

    test.beforeEach(async ({ page }) => {
        digestAuthPage = new DigestAuthPage(page);
        await digestAuthPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet')
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/digest_auth')
    })

    test('has needed elements', async () => {
        await expect(digestAuthPage.h3).toBeVisible();
        await expect(digestAuthPage.mainText).toBeVisible();
    })
})
