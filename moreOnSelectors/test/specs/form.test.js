import FormPage from '../pageobjects/form.page.js'

describe('My Form application', () => {
    it('should find an h1 with the text "Form validation" ', async () => {
        await FormPage.open();
        await FormPage.header.waitForDisplayed();
        await expect(FormPage.header).toHaveText('Form validation');
    })
    it('should provide 9 errors when submitting without entering anything in', async () =>{
        await FormPage.submit.waitforClickable();
        await FormPage.submit.click();
        await FormPage.errortext.waitForDisplayed();
        await expect(FormPage.errortext).toHaveText('The form could not be submitted because 9 errors were found.')
    })
    it('should select a title', async () => {
        await FormPage.title.waitforClickable;
        await FormPage.title.click();
        await FormPage.titleesq.waitForDisplayed
        await FormPage.titleesq.click();
        await expect(FormPage.titleesq).toBeSelected();
    })
    it('should enter a First Name', async () => {
        await FormPage.inputFirstName.waitForDisplayed();
        await FormPage.inputFirstName.setValue('Andrew');
        await expect(FormPage.inputFirstName).toHaveValue('Andrew');
    })
    it('should enter a Last Name', async () => {
        await FormPage.inputLastName.waitForDisplayed();
        await FormPage.inputLastName.setValue('Elie')
        await expect(FormPage.inputLastName).toHaveValue('Elie');
    })
    it('should enter an email', async () => {
        await FormPage.inputEmail.waitForDisplayed();
        await FormPage.inputEmail.setValue('andrewe@autest.net');
        await expect(FormPage.inputEmail).toHaveValue('andrewe@autest.net');
    })
    it('should enter a phone number', async () => {
        await FormPage.inputPhoneNumber.waitForDisplayed();
        await FormPage.inputPhoneNumber.setValue('3131234567');
        await expect(FormPage.inputPhoneNumber).toHaveValue('3131234567');
    })
    it('should enter a postal code', async () => {
        await FormPage.inputPostalCode.waitForDisplayed();
        await FormPage.inputPostalCode.setValue('X7M1M7');
        await expect(FormPage.inputPostalCode).toHaveValue('X7M1M7');
    })
    xit('should upload a file', async () => {
        //browser.uploadFile(localpath)
    })
    it('should agree to the terms and conditions', async () => {
        await FormPage.checkAgree.waitForDisplayed();
        await FormPage.checkAgree.click();
        await expect(FormPage.checkAgree).toBeEnabled();
    })
    it('should select fish as favorite pet', async () => {
        await FormPage.selectPetFish.waitForDisplayed();
        await FormPage.selectPetFish.click();
        await expect(FormPage.selectPetFish).toBeEnabled();
    })
    it('should claim canadian citizenship', async () => {
        await FormPage.selectCitizen.waitForDisplayed();
        await FormPage.selectCitizen.click();  
        await expect(FormPage.selectCitizen).toBeEnabled();
    })
    it('should only throw up one error when submitting', async () => {
        await FormPage.submit.waitForDisplayed();
        await FormPage.submit.click();
        await FormPage.errortext.waitForDisplayed();
        await expect(FormPage.errortext).toHaveText('The form could not be submitted because 1 error was found.')
    })
});