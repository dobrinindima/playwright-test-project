import { expect, test } from "@playwright/test";
import { DynamicControlsPage } from '../pages/dynamic-controls-page';

test.describe('Dynamic Controls', () => {
    let dynamicControlsPage: DynamicControlsPage;

    test.beforeEach(async ({ page }) => {
        dynamicControlsPage = new DynamicControlsPage(page);
        await dynamicControlsPage.open();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
    })

    test('has correct URL', async ({ page }) => {
        await expect(page).toHaveURL('/dynamic_controls');
    })

    test('has needed elements', async () => {
        await expect(dynamicControlsPage.h4).toBeVisible();
        await expect(dynamicControlsPage.mainText).toBeVisible();
        await expect(dynamicControlsPage.removeAddText).toBeVisible();
        await expect(dynamicControlsPage.checkbox).toBeVisible();
        await expect(dynamicControlsPage.removeButton).toBeVisible();
        await expect(dynamicControlsPage.enableDisableText).toBeVisible();
        await expect(dynamicControlsPage.inputField).toBeVisible();
        await expect(dynamicControlsPage.enableButton).toBeVisible();
    })

    test('use Remove and Add buttons', async () => {
        await dynamicControlsPage.removeButton.click();

        await expect(dynamicControlsPage.loading).toBeVisible();
        expect(await dynamicControlsPage.message.innerText()).toBe("It's gone!");
        await expect(dynamicControlsPage.addButton).toBeVisible();

        await dynamicControlsPage.addButton.click();

        await expect(dynamicControlsPage.removeButton).toBeVisible();
        expect(await dynamicControlsPage.message.innerText()).toBe("It's back!");
        await expect(dynamicControlsPage.aCheckboxText).toBeVisible();
    })

    test('use Remove and Add buttons with A checkbox', async () => {
        await dynamicControlsPage.checkbox.click();
        await dynamicControlsPage.removeButton.click();

        await expect(dynamicControlsPage.loading).toBeVisible();
        expect(await dynamicControlsPage.message.innerText()).toBe("It's gone!");
        await expect(dynamicControlsPage.addButton).toBeVisible();

        await dynamicControlsPage.addButton.click();

        expect(await dynamicControlsPage.loading.count()).toBe(2);
        await expect(dynamicControlsPage.removeButton).toBeVisible();
        expect(await dynamicControlsPage.message.innerText()).toBe("It's back!");
        await expect(dynamicControlsPage.aCheckboxText).toBeVisible();

        await dynamicControlsPage.removeButton.click();

        expect(await dynamicControlsPage.loading.count()).toBe(3);
        await expect(dynamicControlsPage.aCheckboxText).toBeVisible();
        expect(await dynamicControlsPage.aCheckboxText.count()).toBe(1);

        await dynamicControlsPage.addButton.click();

        expect(await dynamicControlsPage.loading.count()).toBe(4);
        await expect(dynamicControlsPage.removeButton).toBeVisible();
        expect(await dynamicControlsPage.message.innerText()).toBe("It's back!");
        expect(await dynamicControlsPage.aCheckboxText.count()).toBe(2);
    })

    test('use Enable/disable buttons', async () => {
        await expect(dynamicControlsPage.inputField).toBeDisabled();
        await dynamicControlsPage.enableButton.click();

        expect(await dynamicControlsPage.loading.count()).toBe(1);
        expect(await dynamicControlsPage.message.innerText()).toBe("It's enabled!");

        await expect(dynamicControlsPage.inputField).toBeEnabled();
        await dynamicControlsPage.inputField.fill('Message for test');
        await dynamicControlsPage.disableButton.click();

        expect(await dynamicControlsPage.loading.count()).toBe(2);
        expect(await dynamicControlsPage.message.innerText()).toBe("It's disabled!");
        await expect(dynamicControlsPage.inputField).toBeDisabled();
    })
})
