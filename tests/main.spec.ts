import { test, expect } from '@playwright/test';

test.describe('Main page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/The Internet/);
  });
})
