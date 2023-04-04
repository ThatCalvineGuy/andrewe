import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
    it('should not login with invalid password', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'barrywhite')
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!')
    })
    it('should not login with invalid username', async () => {
        await LoginPage.open()
        await LoginPage.login('tomjones', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!')
    })
        it('should not login with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('tomjones', 'barrywhite')
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!')
})
})