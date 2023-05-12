import Page, { generateGetFunction } from './page.js';

const getFunctions = {
  ...generateGetFunction('#checkboxes > input[type=checkbox]:nth-child(1)', 'cbox1'),
  ...generateGetFunction('#checkboxes > input[type=checkbox]:nth-child(3)', 'cbox2')
};

class CheckboxPage extends Page {
  get cbox1() {
    return getFunctions.cbox1();
  }

  get cbox2() {
    return getFunctions.cbox2();
  }

  open() {
    return super.open('checkboxes');
  }
}

export default new CheckboxPage();
