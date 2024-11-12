import VanillaTilt from "vanilla-tilt";

// Header Animation
const header = document.querySelector("header");

let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    header.classList.add("scrolling-down");
  } else {
    header.classList.remove("scrolling-down");
  }
  lastScrollPosition = currentScrollPosition;
});
