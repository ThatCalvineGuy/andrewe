import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('should have 5 elements', async () => {
        await ElementsPage.open()
        await ElementsPage.setButtons(5);
        await expect (ElementsPage).buttoncount == 5
    });
    it('should have 2 elements', async () => {
        await ElementsPage.setButtons(2);
        await expect (ElementsPage).buttoncount == 2
    });
    it('should have 3 elements', async () => {
        await ElementsPage.setButtons(3);
        await expect (ElementsPage).buttoncount == 3
    });
});
