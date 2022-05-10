/* plain js */
const explore = document.getElementById("explore-box");
const details = document.getElementById("details-box");
const plusIcon = document.getElementById("plus-icon");
const closeBtn = document.getElementById("close-btn");

plusIcon.addEventListener("click", function () {
	details.classList.toggle("d-none");
	explore.classList.toggle("d-none");
});

closeBtn.addEventListener("click", function () {
	details.classList.toggle("d-none");
	explore.classList.toggle("d-none");
});