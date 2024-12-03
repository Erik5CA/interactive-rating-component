// get the rating state form the url
const urlParams = new URLSearchParams(window.location.search);
const ratingState = urlParams.get("rating");

const ratingStateContainer = document.querySelector(".rating-state__container");
const ratingStateSumitted = document.querySelector(".rating-state__submitted");

// if the rating state is not passed in the url, show the form
if (!ratingState) {
  ratingStateContainer.classList.remove("dont-show");
  ratingStateSumitted.classList.add("dont-show");
}

// if the rating state is passed in the url, show the thank you message
if (ratingState) {
  ratingStateContainer.classList.add("dont-show");
  ratingStateSumitted.classList.remove("dont-show");
  const spanUserRating = document.querySelector("#user-rating");
  spanUserRating.textContent = ratingState.toString();
}
