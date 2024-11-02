import { test, expect } from '@playwright/test'
import { ContextMenuPage } from '../pages/context-menu-page';

test.describe('Context Menu', () => {
    let contextMenuPage: ContextMenuPage;

    test.beforeEach(async ({ page }) => {
        contextMenuPage = new ContextMenuPage(page);
        await contextMenuPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/context_menu');
    })

    test('has needed elements', async () => {
        await expect(contextMenuPage.h3).toBeVisible();
        await expect(contextMenuPage.mainText1).toBeVisible();
        await expect(contextMenuPage.mainText2).toBeVisible();
        await expect(contextMenuPage.hotSpot).toBeVisible();
    })

    test('Right-click in the box', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('You selected a context menu');

            await dialog.accept();
        });

        await contextMenuPage.hotSpot.click({ button: 'right' });
    })
})
