const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".menu-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
