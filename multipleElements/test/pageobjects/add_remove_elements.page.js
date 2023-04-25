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
  async addButtons(number) {
    for (let i=(ElementsPage).buttonCount; i < number; i++) {
      await (ElementsPage).addaButton.click();
  }}
  async deleteButtons(number) {
    for (let i=(ElementsPage).buttonCount; i > number; i--) {
      await (ElementsPage).deleteaButton.click();
  }}
  open() {
    return super.open('add_remove_elements');
}}
export default new ElementsPage();
