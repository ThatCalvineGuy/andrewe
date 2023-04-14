import FormPage from '../pageobjects/form.page.js'

describe('My Form application', () => {
    it('should find an h1 with the text "Form validation" ', async () => {
        await FormPage.open();
        await expect(FormPage.header).toHaveTextContaining('Form validation');
    })
    it('should select an option from a dropdown', async () => {
        await FormPage.title.click();
        await FormPage.titleesq.click();
        await expect(FormPage.title).toHaveTextContaining('Esq.')
    })
});