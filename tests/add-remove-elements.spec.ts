import { test, expect } from "@playwright/test";
import { AddRemoveElementsPage } from '../pages/add-remove-elements-page';

test.describe('Add/Remove Elements', () => {
  let addRemoveElementsPage: AddRemoveElementsPage;

  test.beforeEach(async ({ page }) => {
    addRemoveElementsPage = new AddRemoveElementsPage(page);
    await addRemoveElementsPage.open();
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('has correct URL', async ({ page }) => {
    await expect(page).toHaveURL('/add_remove_elements/');
  });

  test('has needed elements', async () => {
    await expect(addRemoveElementsPage.h3).toBeVisible();
    await expect(addRemoveElementsPage.addElementButton).toBeVisible();
  })

  test('add and remove one element', async () => {
    await addRemoveElementsPage.addElementButton.click();
    await expect(addRemoveElementsPage.deleteButton).toBeVisible();

    await addRemoveElementsPage.deleteButton.click();
    await expect(addRemoveElementsPage.deleteButton).toBeHidden();
  })

  test('add and remove many elements', async () => {
    for (let i = 0; i < 3; i++) {
      await addRemoveElementsPage.addElementButton.click();
      expect(await addRemoveElementsPage.deleteButton.count()).toBe(i + 1);
    }

    for (let i = 3; i > 0; i--) {
      await addRemoveElementsPage.deleteButton.first().click();
      expect(await addRemoveElementsPage.deleteButton.count()).toBe(i - 1);
    }
  })
});
