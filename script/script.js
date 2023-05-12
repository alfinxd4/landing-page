const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".menu-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

function show_hide() {
  const click = document.querySelector(".dropdown");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}
