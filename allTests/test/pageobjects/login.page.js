import Page from './page.js';

const getFunctions = {
  ...generateGetFunction('#username', 'inputUsername'),
  ...generateGetFunction('#password', 'inputPassword'),
  ...generateGetFunction('button[type="submit"]', 'btnSubmit')
};

class LoginPage extends Page {

  get inputUsername() {
    return getFunctions.inputUsername();
  }
  get inputPassword() {
    return getFunctions.inputPassword();
  }
  get btnSubmit() {
    return getFunctions.btnSubmit();
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open('login');
  }
}

export default new LoginPage();