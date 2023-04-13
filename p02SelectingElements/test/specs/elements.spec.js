import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('should create 5 elements, delete 2, and leave 3 remaining', async () => {
        await ElementsPage.open()
        await browser.pause(3000)

        await for (; '#elements' < 5; ;) {
            (ElementsPage).AddButton.click();
            browser.pause(1000);
        }
        await expect('#elements').toHaveChildren(5)
        await browser.pause(3000)

        await for (; '#elements' > 3; ;) {
            (ElementsPage).clickDeleteButton.click();
            browser.pause(1000);
        }
        await expect('#elements').toHaveChildren(3)
        await browser.pause(3000)
    });
});
