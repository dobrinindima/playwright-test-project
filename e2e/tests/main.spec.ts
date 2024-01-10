import { test, expect } from '@playwright/test';

test.describe('Main page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/The Internet/);
  });
})
