import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('Should create 5 elements and remove 2, resulting in 3 remaining', async () => {
        await ElementsPage.open()
        await browser.pause(3000)
        await (ElementsPage).addElement.click()
        await browser.pause(3000)
        await (ElementsPage).addElement.click()
        await browser.pause(3000)
        await (ElementsPage).addElement.click()
        await browser.pause(3000)
        await (ElementsPage).addElement.click()
        await browser.pause(3000)
        await (ElementsPage).addElement.click()
        await browser.pause(3000)
        await expect(ElementsPage.allElements).toHaveChildren(5)
        await browser.pause(3000)
        await (ElementsPage).deleteElement.click()
        await browser.pause(3000)
        await (ElementsPage).deleteElement.click()
        await browser.pause(3000)
        await expect(ElementsPage.allElements).toHaveChildren(3)
    });
});