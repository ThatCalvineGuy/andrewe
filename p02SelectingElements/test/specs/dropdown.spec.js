import dropdownPage from "../pageobjects/dropdown.page.js";

describe('Dropdown page', () => {
    it('should select option 1', async () => {
        await dropdownPage.open()
        await (dropdownPage).dDown.click()
        await (dropdownPage).option1.click()
        await expect(dropdownPage.option1).toBeSelected()
    });
    it('should select option 2', async () => {
        await dropdownPage.open()
        await (dropdownPage).dDown.click()
        await (dropdownPage).option2.click()
        await expect(dropdownPage.option2).toBeSelected()
    });
});