

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class signUpPage extends Page {

    get submit() { return $('#validation-example > input.btn.btn-primary'); }
    get errortext() { return $('#errors-validation-example > h2'); }
    get title() { return $('#title1') }
    get titleesq() { return $('#title1 > option:nth-child(3)') }
    get titlemr() { return $('#title1 > option:nth-child(4)') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('index.php?rt=account/create');
    }
}

export default new LoginPage();
