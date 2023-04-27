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
    while (ElementsPage.buttonCount < number) {
      await ElementsPage.addButton.click();}
    while (ElementsPage.buttonCount > number) {
      await ElementsPage.deleteButton.click();}
  }
  open() {
    return super.open('add_remove_elements');
}}
export default new ElementsPage();
