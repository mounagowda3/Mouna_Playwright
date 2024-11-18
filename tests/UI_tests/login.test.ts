import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ProductPage } from '../../pages/productPage';

test.describe('UI Login Tests', () => {
    let loginPage: LoginPage;
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        console.log('Navigating to the login page');
        await loginPage.goToLoginPage();
    });

    test('Verify Login with Valid Data', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce'); // login successfully
        let productTitle = await productPage.getProductTitle();
        console.log('Login with Valid Data');
        expect(productTitle).toBe('Products');
    });

    test('Verify Login with Invalid Data', async ({ page }) => {
        await loginPage.login('wrong_user', 'wrong_password');
        const errorMessage = await loginPage.getErrorMessage();
        console.log('Login with Invalid Data');
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });

    test('Verify Login with Empty Data', async ({ page }) => {
        await loginPage.login('', '');
        const errorMessage = await loginPage.getErrorMessage();
        console.log('Login with Empty Data');
        expect(errorMessage).toBe('Epic sadface: Username is required');
    });
});
