import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cbqlgidfawaybcrmjqzm.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicWxnaWRmYXdheWJjcm1qcXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1ODczMTAsImV4cCI6MjA0ODE2MzMxMH0.WXv9233sdzpnvV8zsnZSCd6mR9jsQfgzg_ULXSSbfSo";

// Check for missing Supabase credentials
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Supabase URL or Key is missing. Please check your .env file.");
  alert("Unable to initialize Supabase. Please contact support.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");
  const userReviewsSection = document.getElementById("userReviews");

  // Submit review to Supabase
  reviewForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const reviewText = document.getElementById("reviewText").value.trim();
    const rating = document.getElementById("rating").value;

    if (userName === "" || reviewText === "") {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Save to Supabase
    const { data, error } = await supabase
      .from("reviews")
      .insert([
        {
          name: userName,
          review_text: reviewText,
          rating: parseInt(rating, 10),
        },
      ])
      .select("*");

    if (error) {
      console.error("Error saving review:", error);
      alert("There was an error saving your review.");
    } else if (data && data.length > 0) {
      alert("Review submitted successfully!");
      displayReview(data[0]); // Display the newly added review
    } else {
      console.error("Insert succeeded, but no data returned.");
      alert(
        "Review submitted, but unable to display it. Please refresh the page."
      );
    }

    // Clear the form
    document.getElementById("userName").value = "";
    document.getElementById("reviewText").value = "";
    document.getElementById("rating").value = "5"; // Reset to 5 stars
  });

  // Fetch and display all reviews on page load
  fetchReviews();

  async function fetchReviews() {
    const { data: reviews, error } = await supabase.from("reviews").select("*"); // Newest to oldest

    if (error) {
      console.error("Error fetching reviews:", error.message);
      return;
    }

    console.log("Fetched reviews:", reviews); // Debug log
    // Clear existing reviews before appending
    userReviewsSection.innerHTML = "";

    reviews.forEach((review) => displayReview(review));
  }

  function displayReview(review) {
    // Format the timestamp as-is (assumes it's already in Pacific Time)
    const formattedTime = new Date(review.created_at).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    // Display the review
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = `
      <p><strong>Name:</strong> ${review.name}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(review.rating)}</p>
      <p><strong>Review:</strong> ${review.review_text}</p>
      <p><em>Posted on: ${formattedTime}</em></p>
      <hr>
    `;
    userReviewsSection.prepend(reviewElement);
  }
});
