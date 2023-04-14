import FormPage from '../pageobjects/form.page.js'

describe('My Form application', () => {
    it('should find an h1 with the text "Form validation" ', async () => {
        await FormPage.open();
        await expect(FormPage.header).toHaveTextContaining('Form validation');
    })
});