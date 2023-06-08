import Page from './page.js';

class signUpPage extends Page {

    get nameFirst() { return $('#AccountFrm_firstname'); }
    get nameLast() { return $('#AccountFrm_lastname'); }
    get email() { return $('#AccountFrm_email'); }
    get address() { return $('#AccountFrm_address_1'); }
    get country() { return $('#AccountFrm_country_id'); }
    get city() { return $('#AccountFrm_city'); }
    get region() { return $('#AccountFrm_zone_id'); }
    get zipCode() { return $('#AccountFrm_postcode'); }
    get username() { return $('#AccountFrm_loginname'); }
    get password() { return $('#AccountFrm_password')}
    get passwordConfirm() {return $('#AccountFrm_confirm')}

    async accountCreator (accountArray) {
        await this.nameFirst.setValue(accountArray[0]);
        await this.nameLast.setValue(accountArray[1]);
        await this.email.setValue(accountArray[2]);
        await this.address.setValue(accountArray[3]);
        await this.country.setValue(accountArray[4]);
        await this.city.setValue(accountArray[5]);
        await this.region.selectByVisibleText(accountArray[6]);
        await this.zipCode.setValue(accountArray[7]);
        await this.region.selectByVisibleText(accountArray[8]);
        await this.password.setValue(accountArray[9]);
        await this.passwordConfirm.setValue(accountArray[10]);
    }

    open () {
        return super.open('index.php?rt=account/create');
    }
}

export default new LoginPage();
