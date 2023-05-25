import CheckboxPage from "../pageobjects/checkboxes.page.js";

describe('Checkbox page', () => {
    it('should be online', async () => {
        await CheckboxPage.open();
    });
    it('first check box should be checked', async () => {
        CheckboxPage.checkerizer(CheckboxPage.cbox1,true)
    });
    it('second check box should not be checked', async () => {
        CheckboxPage.checkerizer(CheckboxPage.cbox2,false)
    });
});