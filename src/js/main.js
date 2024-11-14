import VanillaTilt from "vanilla-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./parallax";
import "./popup";

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

  // Entry from bottom
  function entryFromBottom(element) {
    //create a function that animated element for a smooth apparition
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "-150px bottom",
      },
      y: 200,
      duration: 0.5,
      stagger: 0.2,
    });
  }
  document.querySelectorAll(".shop-text").forEach((element) => {
    entryFromBottom(element);
  });
  entryFromBottom(".shop .button");
  entryFromBottom(".perso-title");
  entryFromBottom(".perso-ornament");
  entryFromBottom(".card");

  // book and logo anim
  const tlBook = gsap.timeline({
    scrollTrigger: {
      trigger: ".shop-book",
      start: "top 90%",
    },
  });

  tlBook.from(".logo", {
    x: -900,
    duration: 1,
  });
  tlBook.from(
    ".shop-book",
    {
      x: -700,
      duration: 1,
    },
    "0.4"
  );

  // Footer anim
  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
    },
  });

  tlFooter.from(".footer-logo-dargaud", {
    y: 90,
    duration: 0.3,
  });
  tlFooter.from(".footer-social", {
    y: 90,
    duration: 0.3,
    stagger: 0.1,
  });

  // Enter text anim
  const caracters = document.querySelectorAll(".shop-split-text span");
  const caractersContainer = document.querySelector(".shop-split-container");

  caracters.forEach(function (caracter) {
    const randomY = Math.floor(Math.random() * 200) + 30;

    const randomEnd = Math.floor(Math.random() * 25);

    gsap.fromTo(
      caracter,
      {
        opacity: 0,
        y: randomY,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: caractersContainer,
          start: `top 95%`,
          end: `top ${randomEnd}%`,
          scrub: 0.3,
        },
      }
    );
  });
});
