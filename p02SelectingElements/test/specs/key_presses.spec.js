import KeyPressesPage from '../pageobjects/key_press.page.js';

describe('My Key Press application', () => {
    it('should display the letter C when entered into the input', async () => {
        await KeyPressesPage.open();

        await KeyPressesPage.pressAkey('C');

        await expect(KeyPressesPage.keyPressResult).toHaveTextContaining(
            'You entered: C');
    });
    it('should display the letter D when entered into the input', async () => {
        await KeyPressesPage.open();

        await KeyPressesPage.pressAkey('D');

        await expect(KeyPressesPage.keyPressResult).toHaveTextContaining(
            'You entered: D');
    });    
});
