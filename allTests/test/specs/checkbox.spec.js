import CheckboxPage from "../pageobjects/checkboxes.page.js";

describe('Checkbox page', () => {
    it('should select first checkbox', async () => {
        await CheckboxPage.open()
        await (CheckboxPage).cbox1.click()
    });
    it('should select second checkbox', async () => {
        await CheckboxPage.open()
        await (CheckboxPage).cbox2.click()
    });
});