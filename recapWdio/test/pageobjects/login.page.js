import Page from './page.js';

class LoginPage extends Page {

    get dDown() { return $('#dropdown'); }
    get inputUsername() { return $('#username') };
    get inputPassword() { return $('#password') };
    get btnSubmit() { return $('button[type="submit"]') };

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
