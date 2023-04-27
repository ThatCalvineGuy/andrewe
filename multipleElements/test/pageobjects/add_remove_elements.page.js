import Page from './page.js';
class ElementsPage extends Page {

  get addaButton() { 
    return $('button[onclick="addElement()"]') 
  }
  get deleteaButton() { 
    return $('button[onclick="deleteElement()"]') 
  }  
  get buttonCount() {
    return $$('#added-manually').length;
  }

  async setButtons(number) {
    while (ElementsPage.buttonCount < number) {
      await ElementsPage.addaButton.click();}
    while (ElementsPage.buttonCount > number) {
      await ElementsPage.deleteaButton.click();}
  }
  open() {
    return super.open('add_remove_elements');
}}
export default new ElementsPage();
