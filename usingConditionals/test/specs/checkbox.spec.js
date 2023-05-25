import CheckboxPage from "../pageobjects/checkboxes.page.js";

async function checkerizer(checkbox, checkme) {
    if (checkme) {
        if (!await checkbox.isSelected()) {
            await checkbox.click();
        }
        await expect(checkbox).toBeSelected();
    } else {
        if (await checkbox.isSelected()) {
            await checkbox.click();
        }
        await expect(checkbox).not.toBeSelected();
    }
}

describe('Checkbox page', () => {
    it('should be online', async () => {
        await CheckboxPage.open();
    });
    it('first check box should be checked', async () => {
        await checkerizer(CheckboxPage.cbox1,true)
    });
    it('second check box should not be checked', async () => {
        await checkerizer(CheckboxPage.cbox2,false)
    });
});