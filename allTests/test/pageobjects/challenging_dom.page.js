import Page from './page.js';

const getFunctions = {
  ...generateGetFunction('=Elemental Selenium', 'linkText'),
  ...generateGetFunction('*=Selenium', 'partialLinkText'),
  ...generateGetFunction('//*[@id="content"]//tr[1]/td[2]', 'ape'),
  ...generateGetFunction('/html/body/div[2]/div/div/div/div/div[1]/a[1]', 'blueButton'),
  ...generateGetFunction('/html/body/div[2]/div/div/div/div/div[1]/a[3]', 'greenButton')
};

class challenging_domPage extends Page {

  get linkText() {
    return getFunctions.linkText();
  }
  get partialLinkText() {
    return getFunctions.partialLinkText();
  }
  get ape() {
    return getFunctions.ape();
  }
  get blueButton() {
    return getFunctions.blueButton();
  }
  get greenButton() {
    return getFunctions.greenButton();
  }
  async greenText() {
    return await this.greenButton.getText();
  }

  open() {
    return super.open('challenging_dom');
  }
}
export default new challenging_domPage();