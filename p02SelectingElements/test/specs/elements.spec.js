import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('should create 5 elements and delete 3 leaving 2 remaining', async () => {
        await ElementsPage.open()
        await browser.pause(3000)
        await (ElementsPage).clickAddButton()
        await browser.pause(3000)
        await (ElementsPage).clickAddButton()
        await browser.pause(3000)
        await (ElementsPage).clickAddButton()
        await browser.pause(3000)
        await (ElementsPage).clickAddButton()
        await browser.pause(3000)
        await (ElementsPage).clickAddButton()
        await browser.pause(3000)
        await (ElementsPage).clickDeleteButton()
        await browser.pause(3000)
        await (ElementsPage).clickDeleteButton()
        await browser.pause(3000)
        await (ElementsPage).clickDeleteButton()
        await browser.pause(3000)
        await expect('#elements').toHaveChildren(2)
    });
});
