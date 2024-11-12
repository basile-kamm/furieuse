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

// Set banner height from children
const banner = document.querySelector(".banner");
// Find the tallest image height
const tallestImage = Math.max(
  ...Array.from(banner.querySelectorAll("img")).map((img) => img.height)
);
// Set the banner height to match the tallest image
banner.style.height = `${tallestImage}px`;
