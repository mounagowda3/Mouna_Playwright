import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ProductPage } from '../../pages/productPage';

test.describe('UI Product Tests', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await loginPage.goToLoginPage();
    console.log('Navigating to the login page');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Verify Add to Cart Productand Checkout', async ({ page }) => {
    let prodCount = 2;  // Number of products to add to the cart
    // Add products to the cart
    await productPage.addToCart(prodCount); 
    // Navigate to the checkout page
    await productPage.goToCheckout();
    // Verify and check the cart badge value after adding products
    let cartBadge = await productPage.getCartBadge();
    await expect(cartBadge).toHaveText(prodCount.toString());
    // Navigate to complete checkout
    await productPage.clickCheckoutButtonInCart();
    let checkoutTitle = await productPage.getCheckoutTitle();
    expect(checkoutTitle).toContain("Checkout: Your Information");
  });

  test('Verify Remove Product from Cart', async ({ page }) => {
    let prodCount = 2;
     // Add products to the cart
    await productPage.addToCart(prodCount);
    // Navigate to the checkout page
    await productPage.goToCheckout();
    // Remove products from the cart
    await productPage.clickRemoveitem(prodCount);
    let cartBadge = await productPage.getCartBadge();
    // Verify Cart badge count after removal
    await expect(cartBadge).toHaveText(prodCount.toString());
  });

  test('Verify Product Sort by Price in Ascending Order', async () => {
    // Sorting products by price
    await productPage.sortProductsByPrice('low-to-high');
    // Log the product prices before and after sorting
    const prices = await productPage.getProductPrices();
    console.log(`Product prices before sorting: ${prices}`);
    const sortedPrices = prices.sort((a, b) => a - b);
    console.log(`Sorted product prices: ${sortedPrices}`);
    expect(prices).toEqual(sortedPrices);
  });

});
