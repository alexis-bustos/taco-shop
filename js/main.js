// Function to handle adding items to cart
function addToCart(item, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  // Highlight the anchor tag
  const links = document.querySelectorAll(`a[onclick*="addToCart('${item}'"]`);
  links.forEach((link) => {
    link.classList.add("highlight");
    setTimeout(() => link.classList.remove("highlight"), 1000);
  });
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);

// Attach the function to the global `window` object
window.addToCart = addToCart;
