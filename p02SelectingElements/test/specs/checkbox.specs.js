import checkboxPage from "../pageobjects/checkboxes.page";

describe('Checkboxes', () => {
    it('should select and deselect checkboxes', () => {

        // Select first checkbox
        checkboxPage.selectCheckbox(0);
        expect(checkboxPage.isCheckboxSelected(0)).to.be.true;

        // Deselect first checkbox
        checkboxPage.deselectCheckbox(0);
        expect(checkboxPage.isCheckboxSelected(0)).to.be.false;
    });
});