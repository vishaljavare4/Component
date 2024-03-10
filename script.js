const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

const cart = document.getElementById('cart');

// Function to add product to cart
function addToCart(productId) {
  const quantityElement = document.getElementById(`quantity-${productId}`);
  const quantity = parseInt(quantityElement.innerText);
  quantityElement.innerText = quantity + 1;
  updateCart();
}

// Function to remove product from cart
function removeFromCart(productId) {
  const quantityElement = document.getElementById(`quantity-${productId}`);
  const quantity = parseInt(quantityElement.innerText);
  if (quantity > 0) {
    quantityElement.innerText = quantity - 1;
    updateCart();
  }
}

// Function to update cart
function updateCart() {
  cart.innerHTML = '';
  let totalPrice = 0;
  Products.forEach(product => {
    const quantity = parseInt(document.getElementById(`quantity-${product.id}`).innerText);
    if (quantity > 0) {
      const itemTotal = quantity * product.price;
      totalPrice += itemTotal;
      const cartItem = document.createElement('div');
      cartItem.innerText = `${product.name} x ${quantity} - $${itemTotal}`;
      cart.appendChild(cartItem);
    }
  });
  if (totalPrice === 0) {
    cart.innerText = 'No Product added to the cart';
  } else {
    const totalElement = document.createElement('div');
    totalElement.innerText = `Total Price: $${totalPrice}`;
    cart.appendChild(totalElement);
  }
}

// Initialize
updateCart();
