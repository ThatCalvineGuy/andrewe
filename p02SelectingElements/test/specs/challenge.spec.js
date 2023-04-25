import challenging_domPage from "../pageobjects/challenging_dom.page.js";

describe('Challenging Dom Page', () => {
    it('should have this link', async () => {
        await challenging_domPage.open();
        await challenging_domPage.linkText.waitForExist();
        await expect (challenging_domPage.linkText).toBeClickable();
    });
    it('should have that link', async () => {
        await challenging_domPage.partialLinkText.waitForExist();
        await expect (challenging_domPage.linkText).toBeClickable();
    });
    it('should have this element', async () => {
        await challenging_domPage.ape.waitForExist();
        await expect (challenging_domPage.ape).toHaveText('Apeirian0');
    });
    it('should change the name of the green button when blue button is clicked', async () => {
        const firstGreen = await challenging_domPage.greenText();
        console.log(firstGreen);
        await (challenging_domPage).blueButton.click();
        const secondGreen = await challenging_domPage.greenText();
        console.log(secondGreen);
        expect(firstGreen).not.toEqual(secondGreen);
      });
})