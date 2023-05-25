import CheckboxPage from "../pageobjects/checkboxes.page.js";

async function checkerizer(checkbox, checkme) {
    if (await checkbox.isSelected() != checkme) {
        await checkbox.click();
    }
}

describe('Checkbox page', () => {
    it('should be online', async () => {
        await CheckboxPage.open();
    });
    it('first check box should be checked', async () => {
        await checkerizer(CheckboxPage.cbox1,true)
        await expect(CheckboxPage.cbox1).toBeSelected();
    });
    it('second check box should not be checked', async () => {
        await checkerizer(CheckboxPage.cbox2,false)
        await expect(CheckboxPage.cbox2).not.toBeSelected();
    });
    it('both check boxes should not be checked', async () => {
        await checkerizer(CheckboxPage.cbox1,false)
        await expect(CheckboxPage.cbox1).not.toBeSelected();
        await checkerizer(CheckboxPage.cbox2,false)
        await expect(CheckboxPage.cbox2).not.toBeSelected();
    });
});