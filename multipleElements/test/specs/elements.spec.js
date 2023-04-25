import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('should create 4 elements', async () => {
        await ElementsPage.open()
        for (let i=(ElementsPage).buttonCount; i < 4; i++) {
            await (ElementsPage).addButton.click();
        }
    });
    it('should have 4 elements', async () => {
        await expect (ElementsPage).buttoncount == 4
    });
});
