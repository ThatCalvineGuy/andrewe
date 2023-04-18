import FormPage from '../pageobjects/form.page.js'

describe('My Form application', () => {
    it('should find an h1 with the text "Form validation" ', async () => {
        await FormPage.open();
        await expect(FormPage.header).toHaveTextContaining('Form validation');
    })
    it('should provide 9 errors when submitting without entering anything in', async () =>{
        await FormPage.submit.click();
        await expect(FormPage.errortext).toHaveTextContaining('The form could not be submitted because 9 errors were found.')
    })
    it('should select a title', async () => {
        await FormPage.title.click();
        await FormPage.titleesq.click();
        await expect(FormPage.title).toHaveTextContaining('Esq.')
    })
    it('should enter a name', async () => {
        await FormPage.inputFirstName.setValue('Andrew');
        await FormPage.inputLastName.setValue('Elie')
    })
    it('should enter an email', async () => {
        await FormPage.inputEmail.setValue('andrewe@autest.net');
    })
    it('should enter a phone number', async () => {
        await FormPage.inputPhoneNumber.setValue('3131234567');
    })
    it('should enter a postal code', async () => {
        await FormPage.inputEmail.setValue('X7M1M7');
    })
    xit('should upload a file', async () => {
        //browser.uploadFile(localpath)
    })
    it('should agree to the terms and conditions', async () => {
        await FormPage.checkAgree.click();
    })
    it('should select fish as favorite pet', async () => {
        await FormPage.selectPetFish.click();
    })
    it('should claim canadian citizenship', async () => {
        await FormPage.selectCitizen.click();  
    })


    it('should only throw up one error when submitting', async () => {
        await FormPage.submit.click();
        await expect(FormPage.errortext).toHaveTextContaining('The form could not be submitted because 1 error was found.')
    })
    
});