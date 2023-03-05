// https://www.codewars.com/kata/587593285448632b8d000143
async function submitOrder(user) {
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  const zipCode = await CustomerAPI.getProfileAsync(user);
  const shippingRate = calculateShipping(shoppingCart, zipCode.zipCode);
  const orderSuccessful = await OrderAPI.placeOrderAsync(
    shoppingCart,
    shippingRate
  );
  console.log(
    `Your order ${orderSuccessful ? 'was' : 'was NOT'} placed successfully`
  );
}

// https://www.codewars.com/kata/5876a9f6b09010b1b4000191/train/javascript

//замість трьох варіантів зробив тільки один

ShoppingCart.prototype.addButtonClicked = async function (item) {
  // Check if there's any of the item available
  await this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = async function ({ item, quantity }) {
  // If the item was in stock, add one to our cart
  if (quantity > 0) {
    await this.addToCartAsync(item, 1, this.addButtonClicked2.bind(this));
  }
};

ShoppingCart.prototype.addButtonClicked2 = async function (success) {
  // If it was added to the cart, then refresh the display
  if (success) {
    await this.updateCartDisplayAsync(this.addButtonClicked3.bind(this));
  }
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
  // Log the success or failure of our updates
  this.showMessage(
    `${success ? 'Successfully' : 'Unsuccessfully'} added item to cart`
  );
};
