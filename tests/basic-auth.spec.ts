import { test, expect } from '@playwright/test';

const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;

test.describe('Basic Auth', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('with correct name and password', {tag: '@smoke'}, async ({ page }) => {
        const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
        await page.setExtraHTTPHeaders({ Authorization: `Basic ${base64Credentials}` });
        await page.getByRole('link', { name: 'Basic Auth' }).click();

        await expect(page.getByText('Congratulations! You must have the proper credentials.')).toBeVisible();
    })
})
