import { test, expect } from '@playwright/test';
import { DropdownListPage } from '../pages/dropdown-list-page';

test.describe('Dropdown List', () => {
    let dropdownListPage: DropdownListPage;

    test.beforeEach(async ({ page }) => {
        dropdownListPage = new DropdownListPage(page);
        await dropdownListPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet')
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/dropdown')
    })

    test('has needed elements', async () => {
        await expect(dropdownListPage.h3).toBeVisible();
        await expect(dropdownListPage.dropdown).toBeVisible();
    })

    test('select Option 1', async () => {
        const testedOption = 'Option 1'

        await dropdownListPage.selectOption(testedOption);

        expect(await dropdownListPage.selectedOption.innerText()).toBe(testedOption);
    })

    test('select Option 2', async () => {
        const testedOption = 'Option 2'

        await dropdownListPage.selectOption(testedOption);

        expect(await dropdownListPage.selectedOption.innerText()).toBe(testedOption);
    })
})
