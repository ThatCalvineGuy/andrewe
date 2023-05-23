import Page, { generateGetFunction } from './page.js';



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

  open() {
    return super.open('javascript_alerts');
  }

  async checkResult(param) {
    let specificAlertText;
    switch (param) {
      case 'alert':
        await this.clickAlertButton();
        specificAlertText = 'You successfully clicked an alert';
        break;
      case 'confirm':
        await this.clickConfirmButton();
        specificAlertText = 'You clicked: Ok';
        break;
      default:
        await this.clickPromptButton();
        await this.sendTextToAlert(param);
        specificAlertText = `You entered: ${param}`;
    }
    await this.acceptAlert();
    return (await (await this.result).getText()).includes(specificAlertText);
  }
}

export default new JavaScriptAlertsPage();