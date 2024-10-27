const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

let rate5Button = document.getElementById("rate5Btn");
rate5Button.addEventListener("click", function () {
  updateRating(5);
});

let rate4Button = document.getElementById("rate4Btn");
rate4Button.addEventListener("click", function () {
  updateRating(4);
});

let rate3Button = document.getElementById("rate3Btn");
rate3Button.addEventListener("click", function () {
  updateRating(3);
});

let rate2Button = document.getElementById("rate2Btn");
rate2Button.addEventListener("click", function () {
  updateRating(2);
});

let rate1Button = document.getElementById("rate1Btn");
rate1Button.addEventListener("click", function () {
  updateRating(1);
});

function updateRating(newRating) {
  let star1 = document.getElementById("rating1");
  let star2 = document.getElementById("rating2");
  let star3 = document.getElementById("rating3");
  let star4 = document.getElementById("rating4");
  let star5 = document.getElementById("rating5");

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
