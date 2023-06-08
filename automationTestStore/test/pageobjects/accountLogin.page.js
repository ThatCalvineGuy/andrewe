

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get createAccount() { return $('#accountFrm > fieldset > button'); }
    get inputUsername () {return $('#loginFrm_loginname');}
    get inputPassword () {return $('#loginFrm > fieldset > button');}
    get btnSubmit() { return $('button[type="submit"]'); }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logMeIn (loginArray) {
        await this.inputUsername.setValue(loginArray[0]);
        await this.inputPassword.setValue(loginArray[1]);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('index.php?rt=account/login');
    }
}

export default new LoginPage();
