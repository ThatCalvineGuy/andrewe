import Page from './page.js';
class ElementPage extends Page {
    get addElement () {
        return $('#content > div > button')
    }
    get allElements () {
        return $('#elements')
    }
    get deleteElement () {
        return $('//*[@id="elements"]/button[1]')
    }
    open () {
        return super.open('add_remove_elements');
}}
export default new ElementPage();
