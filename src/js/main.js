import VanillaTilt from "vanilla-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
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

  function findTallestImg() {
    const banner = document.querySelector(".banner");
    const tallestImage = Math.max(
      ...Array.from(banner.querySelectorAll("img")).map((img) => img.height) // Find the tallest image height
    );

    banner.style.height = `${tallestImage}px`; // Set the banner height to match the tallest image
  }
  window.addEventListener("resize", findTallestImg);
  findTallestImg();

  // Parallax effect
  const container = document.querySelector(".hero");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      markers: true,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  tl.to("#hero-1", {
    y: -400,
    scale: 1.1,
  });

  tl.to(
    "#hero-2",
    {
      y: -200,
    },
    "<"
  );
  tl.to(
    "#hero-3",
    {
      y: 50,
    },
    "<"
  );
  tl.to(
    "#hero-ysa",
    {
      y: -150,
      x: -200,
      scale: 1.1,
    },
    "<"
  );
  tl.to(
    "#hero-baron",
    {
      y: -150,
      x: 100,
      scale: 1.1,
    },
    "<"
  );
  tl.to(
    "#hero-claude",
    {
      y: -50,
      x: 300,
      scale: 1.1,
    },
    "<"
  );
  tl.to(
    "#hero-roi",
    {
      y: -50,
      x: -300,
      scale: 1.1,
    },
    "<"
  );
  tl.to(
    "#hero-logo",
    {
      y: 150,
      scale: 1.2,
    },
    "<"
  );

  // Shop section anim
  const shopElements = document.querySelectorAll(".container .row ");

  shopElements.forEach((shopElement) => {
    gsap.from(shopElement, {
      scrollTrigger: {
        trigger: shopElement,
        start: "-400px 90%",
        markers: true,
      },
      y: 400,
      stagger: 0.3,
    });
  });
});
