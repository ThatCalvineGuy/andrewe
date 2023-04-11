import dropdownPage from "../pageobjects/dropdown.page.js";

describe('Dropdown page', () => {
    it('should select option 1', async () => {
        await dropdownPage.open()
        await browser.pause(3000)
        await (dropdownPage).dDown.click()
        await browser.pause(3000)
        await (dropdownPage).option1.click()
        await expect(dropdownPage.option1).toBeSelected()
    });
    it('should select option 2', async () => {
        await dropdownPage.open()
        await browser.pause(3000)
        await (dropdownPage).dDown.click()
        await browser.pause(3000)
        await (dropdownPage).option2.click()
        await expect(dropdownPage.option2).toBeSelected()
    });
});