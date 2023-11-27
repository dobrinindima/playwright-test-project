import { test, expect } from '@playwright/test';

test.describe("A/B Testing page", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/abtest');
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('has correct title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('has correct url', async ({ page }) => {
    // Expect url to be correct.
    await expect(page).toHaveURL('/abtest');
  });

  test('has h3', async ({ page }) => {
    await expect(page.getByRole('heading')).toContainText('A/B Test');
    await expect(page.getByText('Also known as split testing.')).toBeVisible();
  })
})
