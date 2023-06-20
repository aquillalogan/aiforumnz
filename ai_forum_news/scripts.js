const burgurIcon = document.querySelector(".burgur");
const nav = document.getElementById("nav");

burgurIcon.addEventListener("click", () => {
	burgurIcon.classList.toggle("active");
	if (nav.style.display === "grid") {
		nav.style.display = "none";
	} else {
		nav.style.display = "grid";
	}
});
