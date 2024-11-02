import { Locator, Page } from "@playwright/test";

export class DigestAuthPage {
    readonly page: Page;
    readonly h3: Locator;
    readonly mainText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h3 = page.getByRole('heading', { name: 'Digest Auth'});
        this.mainText = page.getByText('Congratulations! You must have the proper credentials.');
    }

    async open() {
        await this.page.setExtraHTTPHeaders({ Authorization: `Digest username="admin", realm="Protected Area", nonce="MTcwMzY5MDc3MyA0MjI1MzZjNzM4MDkzNGE0YWJjNDhmMjA3MjI3NDJlYw==", uri="/digest_auth", response="8c94c6a19d30a0a8014984356fe6461c", opaque="610a2ee688cda9e724885e23cd2cfdee", qop=auth, nc=00000002, cnonce="a6c8ee9cb8662b19"` });
        await this.page.goto('/digest_auth');
    }
}
