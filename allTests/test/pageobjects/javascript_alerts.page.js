import Page from './page.js';

class JavaScriptAlertsPage extends Page {
    get result() { 
        return $('#result'); 
    }
    get buttonAlert() { 
        return $('button[onclick="jsAlert()"]'); 
    }
    get buttonConfirm() { 
        return $('button[onclick="jsConfirm()"]'); 
    }
    get buttonPrompt() { 
        return $('button[onclick="jsPrompt()"]'); 
    }

    async clickAlertButton() {
        await (await this.buttonAlert).click();
    }
    async clickConfirmButton() {
        await (await this.buttonConfirm).click();
    }
    async clickPromptButton() {
        await (await this.buttonPrompt).click();
    }
    async acceptAlert() {
        await browser.acceptAlert();
    }
    async dismissAlert() {
        await browser.dismissAlert();
    }
    open () {
        return super.open('javascript_alerts');
    }
    async checkResult(param) {
        let specificAlertText;
        if (param === 'alert') {
            await this.clickAlertButton();
            specificAlertText = 'You successfully clicked an alert';
        } else if (param === 'confirm') {
            await this.clickConfirmButton();
            specificAlertText = 'You clicked: Ok';
        } else {
            await this.clickPromptButton();
            await browser.sendAlertText(param);
            specificAlertText = `You entered: ${param}`;
        }
        await this.acceptAlert();
        return (await (await this.result).getText()).includes(specificAlertText);
    }
}
export default new JavaScriptAlertsPage();