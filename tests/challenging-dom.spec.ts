import { test, expect } from "@playwright/test";

test.describe('Challenging DOM', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/challenging_dom');
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/The Internet/);
    });

    test('has correct url', async ({ page }) => {
        await expect(page).toHaveURL('/challenging_dom');
    });

    test('has h3', async ({ page }) => {
        await expect(page.getByRole('heading')).toContainText('Challenging DOM');
        await expect(page.getByText('The hardest part in automated web testing is finding the best locators')).toBeVisible();
    })

    test('the table has correct column names', async ({ page }) => {
        const elements = (await page.locator('//table/thead/tr').allInnerTexts()).toString().split('\t');
        
        await expect(elements).toEqual(['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Diceret', 'Action']);
    })

    test('the table has the correct entry in each row',async ({page}) => {
        const rows = await page.locator('//table/tbody/tr').count();

        let myArray: any = [];

        for (let i = rows; i > 0; i--) {
            let rowText = await (await page.locator('//table/tbody/tr').nth(i).allInnerTexts()).toString().split('\t');
            myArray.push(rowText);
        }

        const actualArray = [
            [ '' ],
            ['Iuvaret9', 'Apeirian9', 'Adipisci9', 'Definiebas9', 'Consequuntur9', 'Phaedrum9', 'edit delete'],
            ['Iuvaret8', 'Apeirian8', 'Adipisci8', 'Definiebas8', 'Consequuntur8', 'Phaedrum8', 'edit delete'],
            ['Iuvaret7', 'Apeirian7', 'Adipisci7', 'Definiebas7', 'Consequuntur7', 'Phaedrum7', 'edit delete'],
            ['Iuvaret6', 'Apeirian6', 'Adipisci6', 'Definiebas6', 'Consequuntur6', 'Phaedrum6', 'edit delete'],
            ['Iuvaret5', 'Apeirian5', 'Adipisci5', 'Definiebas5', 'Consequuntur5', 'Phaedrum5', 'edit delete'],
            ['Iuvaret4', 'Apeirian4', 'Adipisci4', 'Definiebas4', 'Consequuntur4', 'Phaedrum4', 'edit delete'],
            ['Iuvaret3', 'Apeirian3', 'Adipisci3', 'Definiebas3', 'Consequuntur3', 'Phaedrum3', 'edit delete'],
            ['Iuvaret2', 'Apeirian2', 'Adipisci2', 'Definiebas2', 'Consequuntur2', 'Phaedrum2', 'edit delete'],
            ['Iuvaret1', 'Apeirian1', 'Adipisci1', 'Definiebas1', 'Consequuntur1', 'Phaedrum1', 'edit delete']
          ]
        await expect(myArray).toEqual(actualArray);
    })
})