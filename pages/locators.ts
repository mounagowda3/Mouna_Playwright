// Locator for the UI 
const locators = {
  usernameInput: 'input[id="user-name"]',
  passwordInput: 'input[id="password"]',
  loginButton: 'input[id="login-button"]',
  errorMessage: 'h3[data-test="error"]',
  productTitle: 'span.title',
  itemPrice: '.inventory_item_price',
  addToCartButton: '.pricebar button:has-text("Add to cart")',
  cartBadge: '.shopping_cart_badge',
  checkoutButton: 'a[class="shopping_cart_link"]',
  checkoutInCart: '#checkout',
  checkoutTitle: 'span.title',
  cancelButton: '#cancel',
  removeItemButton: '.pricebar button:has-text("Remove")',
  selectProdLowToHigh: 'select.product_sort_container option[value="lohi"]',
  filter: '.product_sort_container'
};

export default locators;