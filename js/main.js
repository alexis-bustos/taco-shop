document.addEventListener("DOMContentLoaded", function () {
  // Set the year in the footer
  const year = document.getElementById("year");
  if (year) {
    const thisYear = new Date().getFullYear();
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
  }

  // Function to add event listener if the element exists
  function addClickListener(buttonId, ratingValue, ratingSet) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", function () {
        updateRating(ratingValue, ratingSet);
      });
    }
  }

  // Add event listeners for the first rating section
  addClickListener("rate5Btn", 5, "1");
  addClickListener("rate4Btn", 4, "1");
  addClickListener("rate3Btn", 3, "1");
  addClickListener("rate2Btn", 2, "1");
  addClickListener("rate1Btn", 1, "1");

  // Add event listeners for the second rating section
  addClickListener("rate10Btn", 5, "2");
  addClickListener("rate9Btn", 4, "2");
  addClickListener("rate8Btn", 3, "2");
  addClickListener("rate7Btn", 2, "2");
  addClickListener("rate6Btn", 1, "2");

  // Update rating function now accepts an identifier to know which set of stars to update
  function updateRating(newRating, ratingSet) {
    // Retrieve stars by rating set
    for (let i = 1; i <= 5; i++) {
      const star = document.getElementById(`rating${ratingSet}-${i}`);
      if (star) {
        star.style.color = i <= newRating ? "blue" : "lightgray";
      }
    }
  }
});

// JavaScript to handle adding items to cart
function addToCart(item, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
