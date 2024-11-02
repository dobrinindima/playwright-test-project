import { test, expect } from '@playwright/test';
import { ABTestingPage } from '../pages/ab-testing-page';

test.describe("A/B Test Variation 1", () => {
  let aBTestingPage: ABTestingPage;

  test.beforeEach(async ({ page }) => {
    aBTestingPage = new ABTestingPage(page);
    await aBTestingPage.open();
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
    await expect(aBTestingPage.h3).toBeVisible();
    await expect(aBTestingPage.mainText).toBeVisible();
  })
})
