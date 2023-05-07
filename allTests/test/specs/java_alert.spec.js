import JavaScriptAlertsPage from '../pageobjects/javascript_alerts.page.js';

describe('JavaScript Alerts', () => {
    it('displays an alert when the "Click for JS Alert" button is clicked', async () => {
        await JavaScriptAlertsPage.open();
        await JavaScriptAlertsPage.clickAlertButton();
        await JavaScriptAlertsPage.acceptAlert();
        expect(await JavaScriptAlertsPage.result.getText()).toContain('You successfully clicked an alert');
    });
    it('displays a confirmation when the "Click for JS Confirm" button is clicked', async () => {
        await JavaScriptAlertsPage.open();
        await JavaScriptAlertsPage.clickConfirmButton();
        await JavaScriptAlertsPage.acceptAlert();
        expect(await JavaScriptAlertsPage.result.getText()).toContain('You clicked: Ok');
    });
    it('displays a prompt when the "Click for JS Prompt" button is clicked', async () => {
        const text = 'Hello, world!';
        await JavaScriptAlertsPage.open();
        await JavaScriptAlertsPage.clickPromptButton();
        await JavaScriptAlertsPage.sendTextToAlert(text);
        await JavaScriptAlertsPage.acceptAlert();
        expect(await JavaScriptAlertsPage.result.getText()).toContain(`You entered: ${text}`);
    });
});