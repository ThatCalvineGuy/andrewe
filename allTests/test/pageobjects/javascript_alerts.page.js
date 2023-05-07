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
    async sendTextToAlert(text) {
        await browser.sendAlertText(text);
    }
    open () {
        return super.open('javascript_alerts');
    }
}
export default new JavaScriptAlertsPage();