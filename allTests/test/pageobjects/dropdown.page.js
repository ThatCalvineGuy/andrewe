import Page, { generateGetFunction } from './page.js';

const getFunctions = {
  ...generateGetFunction('#dropdown', 'dDown'),
  ...generateGetFunction('#dropdown > option:nth-child(2)', 'option1'),
  ...generateGetFunction('#dropdown > option:nth-child(3)', 'option2')
};

class DropdownPage extends Page {
  get dDown() {
    return getFunctions.dDown();
  }

  get option1() {
    return getFunctions.option1();
  }

  get option2() {
    return getFunctions.option2();
  }

  open() {
    return super.open('dropdown');
  }
}

export default new DropdownPage();
