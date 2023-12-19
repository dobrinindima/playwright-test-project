import { test, expect } from "@playwright/test";

test.describe('Add/Remove Elements', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/add_remove_elements/');
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('has correct url', async ({ page }) => {
    await expect(page).toHaveURL('/add_remove_elements/');
  });

  test('has h3', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Add/Remove Elements' })).toBeVisible();
  })

  test('add and remove one element', async ({ page }) => {
    const addButton = page.getByRole('button', { name: 'Add Element' });
    const deleteButton = page.getByRole('button', { name: 'Delete' });

    await addButton.click();
    await expect(deleteButton).toBeVisible();

    await deleteButton.click();
    await expect(deleteButton).toBeHidden();
  })

  test('add and remove many elements', async ({ page }) => {
    const addButton = await page.getByRole('button', { name: 'Add Element' });
    const deleteButton = await page.getByRole('button', { name: 'Delete' }).first();

    for (let i = 0; i < 3; i++) {
      await addButton.click();
      expect(await page.locator('//button[text()="Delete"]').count()).toBe(i + 1);
    }

    for (let i = 3; i > 0; i--) {
      await deleteButton.click();
      expect(await page.locator('//button[text()="Delete"]').count()).toBe(i - 1);
    }
  })
});
