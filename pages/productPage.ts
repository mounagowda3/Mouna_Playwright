import { Page } from '@playwright/test';
import locators from './locators';

export class ProductPage {
  constructor(private page: Page) { }

  async addToCart(prodCount: number) {
    // Log the number of available "Add to Cart" buttons
    const buttonCount = await this.page.locator(locators.addToCartButton).count();
    console.log(`Number of add to cart buttons: ${buttonCount}`);
    for (let i = 0; i < prodCount; i++) {
      if (i < buttonCount) {
        await this.page.locator(locators.addToCartButton).nth(i).click();
      } else {
        console.log(`No more buttons to click. Only ${buttonCount} available.`);
        break;
      }
    }
  }

  async getCartBadge() {
    const cartBadge = this.page.locator(locators.cartBadge);
    return cartBadge;
  }

  async goToCheckout() {
    await this.page.click(locators.checkoutButton);
  }

  async clickCheckoutButtonInCart() {
    await this.page.click(locators.checkoutInCart);
  }

  async getCheckoutTitle() {
    return await this.page.textContent(locators.checkoutTitle);;
  }

  async clickRemoveitem(prodCount: number) {
    const removeItemButton = await this.page.locator(locators.removeItemButton).count();
    console.log(`Number of add to cart buttons: ${removeItemButton}`);
    for (let i = 0; i < prodCount; i++) {
      if (i < removeItemButton) {
        await this.page.locator(locators.removeItemButton).nth(i).click();
      } else {
        console.log(`No more buttons to click. Only ${removeItemButton} available.`);
        break;
      }
    }
  }

  async getProductTitle() {
    return await this.page.textContent(locators.productTitle);
  }

  async sortProductsByPrice(order: 'low-to-high' | 'high-to-low') {
    if (order = 'low-to-high') {
      await this.page.selectOption(locators.filter, { value: 'lohi' });
    } else {
      await this.page.selectOption(locators.filter, { value: 'hilo' });
    }
  }

  async getProductPrices(): Promise<number[]> {
    const priceElements = await this.page.locator(locators.itemPrice).allTextContents();
    const prices = priceElements.map(price => parseFloat(price.replace('$', '').trim()));
    return prices;
  }

}
