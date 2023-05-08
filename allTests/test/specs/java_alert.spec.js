import JavaScriptAlertsPage from '../pageobjects/javascript_alerts.page.js';

describe('JavaScript Alerts', () => {
    it('displays an alert when the "Click for JS Alert" button is clicked', async () => {
        await JavaScriptAlertsPage.open();
        await JavaScriptAlertsPage.checkResult('alert')
        expect(await JavaScriptAlertsPage.checkResult()).toBeTruthy();
    });
    it('displays a confirmation when the "Click for JS Confirm" button is clicked', async () => {
        await JavaScriptAlertsPage.checkResult('confirm')
        expect(await JavaScriptAlertsPage.checkResult()).toBeTruthy();
    });
    it('displays a prompt when the "Click for JS Prompt" button is clicked', async () => {
        await JavaScriptAlertsPage.checkResult('Hello World!')
        expect(await JavaScriptAlertsPage.checkResult()).toBeTruthy();
    });
});