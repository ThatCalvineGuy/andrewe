import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('should create 5 elements, delete 2, and leave 3 remaining', async () => {
        await ElementsPage.open()
        await browser.pause(3000)

        for (let i=(ElementsPage).buttonCount; i < 5; i++) {
            await (ElementsPage).addButton.click();
            await browser.pause(1500);
        }
        await browser.pause(3000)

        for (let i=(ElementsPage).buttonCount; i > 3; i--) {
            await (ElementsPage).deleteButton.click();
            await browser.pause(1500);
        }
        await browser.pause(3000)
        await expect (ElementsPage).buttoncount == 3
    });
});
