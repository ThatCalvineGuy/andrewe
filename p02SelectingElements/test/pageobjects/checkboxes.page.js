import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxPage extends Page {
    get checkboxElements() {
        return $$('input[type="checkbox"]');
    }

    getCheckbox(index) {
        return this.checkboxElements[index];
    }

    isCheckboxSelected(index) {
        return this.getCheckbox(index).isSelected();
    }

    selectCheckbox(index) {
        if (!this.isCheckboxSelected(index)) {
            this.getCheckbox(index).click();
        }
    }

    deselectCheckbox(index) {
        if (this.isCheckboxSelected(index)) {
            this.getCheckbox(index).click();
        }
    }
}

open () {
    return super.open('checkboxes');
}
export default new CheckboxPage();
