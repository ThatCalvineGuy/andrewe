import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('should create 5 elements', async () => {
        await ElementsPage.open()

        for (let i=(ElementsPage).buttonCount; i < 5; i++) {
            await (ElementsPage).addButton.click();
        }
        await expect (ElementsPage).buttoncount == 5
    });
    it ('should delete 2 elements, leaving 3 remaining', async () => {
        for (let i=(ElementsPage).buttonCount; i > 3; i--) {
            await (ElementsPage).deleteButton.click();
        }
        await expect (ElementsPage).buttoncount == 3
    });
});
