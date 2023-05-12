import Page from './page.js';

const getFunctions = {
  ...generateGetFunction('#flash', 'flashAlert'),
  ...generateGetFunction('.button.secondary.radius', 'btnLogout')
};

class SecurePage extends Page {

  get flashAlert() {
    return getFunctions.flashAlert();
  }
  get btnLogout() {
    return getFunctions.btnLogout();
  }

  async logout() {
    await this.btnLogout.click();
  }
}

export default new SecurePage();