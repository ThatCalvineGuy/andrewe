import Page from './page.js';
class CheckboxPage extends Page {
    get cbox1 () {
        return $('#checkboxes > input[type=checkbox]:nth-child(1)');
    }
    get cbox2 () {
        return $('#checkboxes > input[type=checkbox]:nth-child(3)');
    }
    open () {
        return super.open('checkboxes');
}}
export default new CheckboxPage();
