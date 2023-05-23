import Page from './page.js';
class ElementsPage extends Page {

  get addButton() { 
    return $('button[onclick="addElement()"]') 
  }

  get deleteButton() { 
    return $('button[onclick="deleteElement()"]') 
  }  

  get buttonCount() {
    return $$('#added-manually').length;
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