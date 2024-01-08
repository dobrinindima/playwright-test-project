import { test, expect } from '@playwright/test'
import { DragAndDropPage } from '../pages/drag-drop-page';

test.describe('Drag and Drop', () => {
    let dragAndDropPage: DragAndDropPage;

    test.beforeEach(async ({ page }) => {
        dragAndDropPage = new DragAndDropPage(page);
        await dragAndDropPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet')
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/drag_and_drop')
    })

    test('has all needed elements', async () => {
        await expect(dragAndDropPage.h3).toBeVisible();
        await expect(dragAndDropPage.columnA).toBeVisible();
        await expect(dragAndDropPage.columnB).toBeVisible();
    })

    test('drag A column to B', async () => {
        expect(await dragAndDropPage.getColumnsWith(1)).toEqual('A');
        expect(await dragAndDropPage.getColumnsWith(2)).toEqual('B');

        await dragAndDropPage.columnA.dragTo(dragAndDropPage.columnB);

        expect(await dragAndDropPage.getColumnsWith(1)).toEqual('B');
        expect(await dragAndDropPage.getColumnsWith(2)).toEqual('A');
    })

    test('drag B column to A', async () => {
        expect(await dragAndDropPage.getColumnsWith(1)).toEqual('A');
        expect(await dragAndDropPage.getColumnsWith(2)).toEqual('B');

        await dragAndDropPage.columnB.dragTo(dragAndDropPage.columnA);

        expect(await dragAndDropPage.getColumnsWith(1)).toEqual('B');
        expect(await dragAndDropPage.getColumnsWith(2)).toEqual('A');
    })

    test('drag A column to page text', async () => {
        expect(await dragAndDropPage.getColumnsWith(1)).toEqual('A');
        expect(await dragAndDropPage.getColumnsWith(2)).toEqual('B');

        await dragAndDropPage.columnA.dragTo(dragAndDropPage.h3);

        expect(await dragAndDropPage.getColumnsWith(1)).toEqual('A');
        expect(await dragAndDropPage.getColumnsWith(2)).toEqual('B');
    })

    test('drag B column to page text', async () => {
        expect(await dragAndDropPage.getColumnsWith(1)).toEqual('A');
        expect(await dragAndDropPage.getColumnsWith(2)).toEqual('B');

        await dragAndDropPage.columnB.dragTo(dragAndDropPage.h3);

        expect(await dragAndDropPage.getColumnsWith(1)).toEqual('A');
        expect(await dragAndDropPage.getColumnsWith(2)).toEqual('B');
    })
})
