import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('should have 5 elements', async () => {
        await ElementsPage.open()
        await ElementsPage.addButtons(5);
        await expect (ElementsPage).buttoncount == 5
    });
    it('should have 3 elements', async () => {
        await ElementsPage.deleteButtons(3);
        await expect (ElementsPage).buttoncount == 3
    });
    it('should have 10 elements', async () => {
        await ElementsPage.addButtons(10);
        await expect (ElementsPage).buttoncount == 10
    });
});
