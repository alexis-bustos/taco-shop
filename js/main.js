// Set the year
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

// Add event listeners for the first rating section
let rate5Button = document.getElementById("rate5Btn");
rate5Button.addEventListener("click", function () {
  updateRating(5, "1");
});

let rate4Button = document.getElementById("rate4Btn");
rate4Button.addEventListener("click", function () {
  updateRating(4, "1");
});

let rate3Button = document.getElementById("rate3Btn");
rate3Button.addEventListener("click", function () {
  updateRating(3, "1");
});

let rate2Button = document.getElementById("rate2Btn");
rate2Button.addEventListener("click", function () {
  updateRating(2, "1");
});

let rate1Button = document.getElementById("rate1Btn");
rate1Button.addEventListener("click", function () {
  updateRating(1, "1");
});

// Add event listeners for the second rating section
let rate10Button = document.getElementById("rate10Btn");
rate10Button.addEventListener("click", function () {
  updateRating(5, "2");
});

let rate9Button = document.getElementById("rate9Btn");
rate9Button.addEventListener("click", function () {
  updateRating(4, "2");
});

let rate8Button = document.getElementById("rate8Btn");
rate8Button.addEventListener("click", function () {
  updateRating(3, "2");
});

let rate7Button = document.getElementById("rate7Btn");
rate7Button.addEventListener("click", function () {
  updateRating(2, "2");
});

let rate6Button = document.getElementById("rate6Btn");
rate6Button.addEventListener("click", function () {
  updateRating(1, "2");
});

// Update rating function now accepts an identifier to know which set of stars to update
function updateRating(newRating, ratingSet) {
  let star1 = document.getElementById("rating" + ratingSet + "-1");
  let star2 = document.getElementById("rating" + ratingSet + "-2");
  let star3 = document.getElementById("rating" + ratingSet + "-3");
  let star4 = document.getElementById("rating" + ratingSet + "-4");
  let star5 = document.getElementById("rating" + ratingSet + "-5");

  // Reset all stars to light gray initially
  star1.style.color = "lightgray";
  star2.style.color = "lightgray";
  star3.style.color = "lightgray";
  star4.style.color = "lightgray";
  star5.style.color = "lightgray";

  // Change the color of the stars based on the rating
  if (newRating >= 1) {
    star1.style.color = "blue";
  }
  if (newRating >= 2) {
    star2.style.color = "blue";
  }
  if (newRating >= 3) {
    star3.style.color = "blue";
  }
  if (newRating >= 4) {
    star4.style.color = "blue";
  }
  if (newRating == 5) {
    star5.style.color = "blue";
  }
}
