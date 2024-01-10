import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import linkValues from '../shared/home-page-links.json';

test.describe('Home page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('has correct URL', async ({ page }) => {
    await expect(page).toHaveURL('/');
  })

  test('has needed elements', async () => {
    await expect(homePage.h1).toBeVisible();
    await expect(homePage.h2).toBeVisible();
  })

  test('open all links and check URL', async ({ page }) => {
    for (let linkValue of linkValues) {
      await page.locator(`//a[text()='${linkValue.linkName}']`).click();
      await expect.soft(page).toHaveURL(linkValue.url);
      await homePage.open();
    }
  })
})
