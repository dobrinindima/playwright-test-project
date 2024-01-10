import { Page, Locator } from "@playwright/test";

export class DynamicContentPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText1: Locator;
    readonly mainText2: Locator;
    readonly mainText3: Locator;
    readonly clickHereButton: Locator;
    readonly contentColumns: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: ('Dynamic Content') })
        this.mainText1 = page.getByText('This example demonstrates the ever-evolving nature of content by loading new text and images on each page refresh.');
        this.mainText2 = page.getByText('To make some of the content static append');
        this.mainText3 = page.getByText('?with_content=static');
        this.clickHereButton = page.locator('//a[text()="click here"]');
        this.contentColumns = page.locator('#content .large-10.columns.large-centered');
    }

    async open() {
        await this.page.goto('/dynamic_content');
    }

    async makeSomeContentStatic() {
        await this.clickHereButton.click();
    }

    async saveColumsText() {
        let columsArray: string[] = [];
        const colums = await this.page.$$('.large-10 .large-10');

        for (let colum of colums) {
            columsArray.push(await colum.innerText());
        }

        return columsArray;
    }

    async arraysHasTheSameElements(oldArray: string[], newArray: string[]) {
        const sortedOldArray = oldArray.sort();
        const sortedNewArray = newArray.sort();

        for (let i = 0; i < oldArray.length; i++) {
            if (sortedOldArray[i] == sortedNewArray[i]) {
                return true;
            }
        }
    }
}
