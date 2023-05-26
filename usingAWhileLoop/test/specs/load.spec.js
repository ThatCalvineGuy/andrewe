import dynamic_loadingPage from "../pageobjects/dynamic_loading.page.js";

    /*
    while (!dynamic_loadingPage.finishText.isDisplayed) {
    console.log('the h4 is currently not visible');
    }
    */

describe('My Dynamic Loading Page', () => {


    it('should verify that start button exists', async () => {
        await dynamic_loadingPage.open();
        await dynamic_loadingPage.startButton.waitForClickable();
        await expect(dynamic_loadingPage.startButton).toBeDisplayed();
    });
    it('should show loading bar after clicking button', async () => {
        await dynamic_loadingPage.startButton.click();
        await dynamic_loadingPage.loadingBar.waitForDisplayed();
        await expect(dynamic_loadingPage.loadingBar).toBeDisplayed();
    })
    it('should show Hello World text after loading bar', async () => {
        await dynamic_loadingPage.finishText.waitForDisplayed();
        await expect(dynamic_loadingPage.finishText).toBeDisplayed();
    })
})