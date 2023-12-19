import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '../pages/checkboxes-page';

test.describe('Checkboxes', () => {
    test.setTimeout(8000);
    let checkboxesPage: CheckboxesPage;

    test.beforeEach(async ({ page }) => {
        checkboxesPage = new CheckboxesPage(page);
        await checkboxesPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    })

    test('has correct url', async ({ page }) => {
        await expect(page).toHaveURL('/checkboxes');
    })

    test('has needed elements', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Checkboxes' })).toBeVisible();
        await expect(checkboxesPage.checkboxFirst).toBeVisible();
        await expect(checkboxesPage.checkboxFirst).not.toBeChecked();
        await expect(checkboxesPage.checkboxSecond).toBeVisible();
        await expect(checkboxesPage.checkboxSecond).toBeChecked();
    })

    test('check the first checkbox', async () => {
        await expect(checkboxesPage.checkboxFirst).not.toBeChecked();
        await checkboxesPage.checkboxFirst.click();
        await expect(checkboxesPage.checkboxFirst).toBeChecked();
    })

    test('uncheck the second checkbox', async () => {
        await expect(checkboxesPage.checkboxSecond).toBeChecked();
        await checkboxesPage.checkboxSecond.uncheck();
        await expect(checkboxesPage.checkboxSecond).not.toBeChecked();
    })

    test('check the first checkbox using function', async () => {
        await expect(checkboxesPage.checkboxFirst).not.toBeChecked();
        await checkboxesPage.changeCheckboxState(1, true);
        await expect(checkboxesPage.checkboxFirst).toBeChecked();
    })

    test('uncheck the second checkbox using function', async () => {
        await expect(checkboxesPage.checkboxSecond).toBeChecked();
        await checkboxesPage.changeCheckboxState(2, false);
        await expect(checkboxesPage.checkboxSecond).not.toBeChecked();
    })
})
