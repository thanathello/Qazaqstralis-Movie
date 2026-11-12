const userInput = document.querySelector("#user-select");
const saveButton = document.querySelector(".save-rating-button");
const ratingInput = document.querySelector(".rating-input");
const ratingsDisplay = document.querySelector(".ratings-display");

saveButton.addEventListener("click", () => {
    console.log(userInput.value, ratingInput.value);
})