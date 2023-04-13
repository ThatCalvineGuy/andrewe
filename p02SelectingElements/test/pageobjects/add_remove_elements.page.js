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
    open () {
        return super.open('add_remove_elements');
}}
export default new ElementsPage();
