const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
	console.log("clicked");
	document.querySelector(".main_nav").classList.toggle("show");
});
