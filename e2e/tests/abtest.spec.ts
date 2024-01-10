import { test, expect } from '@playwright/test';
import { ABTestPage } from '../pages/abtest-page';

test.describe("A/B Test Variation 1", () => {
  let aBTestPage: ABTestPage;

  test.beforeEach(async ({ page }) => {
    aBTestPage = new ABTestPage(page);
    await aBTestPage.open();
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('has correct URL', async ({ page }) => {
    await expect(page).toHaveURL('/abtest');
  });

  test('has needed elements', async () => {
    await expect(aBTestPage.h3).toBeVisible();
    await expect(aBTestPage.mainText).toBeVisible();
  })
})
