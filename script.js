/* plain js */
const explore = document.getElementById("explore-box");
const details = document.getElementById("details-box");
const plusIcon = document.getElementById("plus-icon");
const closeBtn = document.getElementById("close-btn");
const textBox = document.getElementById("text-box");
const textContainer = document.getElementById("text-container");

plusIcon.addEventListener("click", function () {
	plusIcon.classList.add("pressed");
	textBox.classList.remove("slide-out");
	details.classList.remove("fade-out");
	textContainer.classList.toggle('text-container')
	textContainer.classList.toggle('text-container-hidden')
	setTimeout(() => {
		details.classList.toggle("d-none");
		explore.classList.toggle("d-none");
		plusIcon.classList.remove("pressed");
	}, 300);
});

closeBtn.addEventListener("click", function () {
	closeBtn.classList.add("pressed");
	textBox.classList.add("slide-out");
	explore.classList.remove("fade-out");
	textContainer.classList.toggle('text-container-hidden')
	textContainer.classList.toggle('text-container')
	setTimeout(() => {
		details.classList.toggle("d-none");
		explore.classList.toggle("d-none");
		closeBtn.classList.remove("pressed");
		plusIcon.classList.add("pressed");
	}, 500);
	setTimeout(() => {
		plusIcon.classList.remove("pressed");
	}, 1000)
});
