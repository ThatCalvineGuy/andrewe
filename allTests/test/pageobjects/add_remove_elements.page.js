import Page, { generateGetFunction } from './page.js';

const getFunctions = {
  ...generateGetFunction('button[onclick="addElement()"]', 'addButton'),
  ...generateGetFunction('button[onclick="deleteElement()"]', 'deleteButton'),
  ...generateGetFunction('#added-manually', 'buttonCount', true)
};

class ElementsPage extends Page {
  get addButton() {
    return getFunctions.addButton();
  }

  get deleteButton() {
    return getFunctions.deleteButton();
  }

  get buttonCount() {
    return getFunctions.buttonCount().length;
  }

  async setButtons(number) {
    while (this.buttonCount !== number) {
      switch (true) {
        case !Number.isInteger(number):
          throw new Error('Number must be an integer');
        case number < 0:
          throw new Error('Number must be greater than or equal to zero');
        case this.buttonCount < number:
          await this.addButton.click();
        case this.buttonCount > number:
          await this.deleteButton.click();
      }
    }
  }

  open() {
    return super.open('add_remove_elements');
  }
}

export default new ElementsPage();