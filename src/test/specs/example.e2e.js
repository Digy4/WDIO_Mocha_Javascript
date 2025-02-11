// @ts-check
import LoginPage from '../pageobjects/herokuApp/login.page.js';
import SecurePage from '../pageobjects/herokuApp/secure.page.js';

describe('Login:', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should fail assertion when login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You are not logged into a secure area!');
    });
});
