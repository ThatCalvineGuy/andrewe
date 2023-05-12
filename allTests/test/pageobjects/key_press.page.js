import Page, { generateGetFunction } from './page.js';

const getFunctions = {
  ...generateGetFunction('#target', 'keyPressInput'),
  ...generateGetFunction('#result', 'keyPressResult')
};

class KeyPressesPage extends Page {

  get keyPressInput() {
    return getFunctions.keyPressInput();
  }
  get keyPressResult() {
    return getFunctions.keyPressResult();
  }
  async pressAkey(input) {
    await this.keyPressInput.setValue(input);
  }
  open() {
    return super.open('key_presses');
  }
}

export default new KeyPressesPage();