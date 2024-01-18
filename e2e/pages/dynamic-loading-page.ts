import { Locator, Page } from "@playwright/test";

export class DynamicLoadingPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText1: Locator;
    readonly mainText2: Locator;
    readonly exampleLink1: Locator;
    readonly exampleLink2: Locator;
    readonly startButton: Locator;
    readonly loading: Locator;
    readonly helloWorldText: Locator;
    readonly h4First: Locator;
    readonly h4Second: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: ('Dynamically Loaded Page Elements') });
        this.mainText1 = page.getByText("It's common to see an action get triggered that returns a result dynamically. It does not rely on the page to reload or finish loading. The page automatically gets updated (e.g. hiding elements, showing elements, updating copy, etc) through the use of JavaScript.");
        this.mainText2 = page.getByText('There are two examples. One in which an element already exists on the page but it is not displayed. And anonther where the element is not on the page and gets added in.');
        this.exampleLink1 = page.locator('//*[@href="/dynamic_loading/1"]');
        this.exampleLink2 = page.locator('//*[@href="/dynamic_loading/2"]');
        this.startButton = page.getByRole('button', { name: ('Start') });
        this.loading = page.locator('div#loading');
        this.helloWorldText = page.getByText('Hello World!');
        this.h4First = page.getByRole('heading', { name: ('Example 1: Element on page that is hidden') });
        this.h4Second = page.getByRole('heading', { name: ('Example 2: Element rendered after the fact') });
    }

    async open() {
        await this.page.goto('/dynamic_loading');
    }

    async openExample1() {
        await this.page.goto('/dynamic_loading/1');
    }

    async openExample2() {
        await this.page.goto('/dynamic_loading/2');
    }
}
