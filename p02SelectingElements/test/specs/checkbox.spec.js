import CheckboxPage from "../pageobjects/checkboxes.page.js";

describe('Checkbox page', () => {
    it('should select input', async () => {
        await CheckboxPage.open()
        await browser.pause(3000)
        await (CheckboxPage).cbox1.click()
        await browser.pause(3000)
        await (CheckboxPage).cbox2.click()

    });
});