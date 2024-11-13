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

  // Toggle Popup
  const cards = document.querySelectorAll(".card");
  const popups = document.querySelectorAll(".popup");
  const background = document.querySelector(".popup-background");
  const bannerImages = document.querySelectorAll(".banner img");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      let cardValue = card.getAttribute("data-value");
      popups.forEach((popup) => {
        if (popup.classList.contains(cardValue)) {
          const popupTimeline = showPopup(popup); // Store the timeline here
          const closeBtn = popup.querySelector(".close");

          // Add the click event only once to avoid duplicates
          closeBtn.onclick = function () {
            popupTimeline.reverse(); // Reverse the timeline to close
            bannerImages.forEach((bannerImg) => {
              if (bannerImg.classList.contains(cardValue)) {
                gsap.to(bannerImg, {
                  opacity: 0,
                  delay: 1.7,
                  duration: 1,
                  onComplete: () => {
                    window.scrollTo(0, 1000);
                  },
                });
              }
            });
          };
        }
      });
    });
  });

  function showPopup(popup) {
    const tl = gsap.timeline({
      onReverseComplete: () => {
        gsap.set(popup, { display: "none" });
        gsap.set(background, { display: "none" });
        window.scrollTo(0, 1500);
      },
    });

    // Random rotate for popup frame
    const frames = document.querySelectorAll(".popup-frame");

    frames.forEach(function (frame) {
      let randomNum = Math.floor(Math.random() * 20) - 10; //Return random number between -10 & 10
      frame.style.rotate = `${randomNum}deg`;
    });

    // Make elements visible before starting animation
    tl.set(popup, { display: "block" })
      .set(background, { display: "block" })
      .to(background, { opacity: 1, duration: 0.6 }) // Animate background opacity
      .to(
        popup.querySelector(".popup-name"),
        { left: "25vw", duration: 0.6 },
        "<"
      )
      .to(
        popup.querySelector(".popup-text"),
        { left: "40vw", duration: 0.6 },
        "0.2"
      )
      .to(
        popup.querySelector(".popup-main"),
        { left: "-5vw", duration: 0.6 },
        "0.2"
      )
      .to(
        popup.querySelector(".popup-frame-container"),
        {
          left: "unset",
          right: "10vw",
          duration: 0.6,
        },
        "0.2"
      )
      .to(
        popup.querySelectorAll(".popup-frame"),
        {
          transform: "translateX(0)",
          stagger: 0.1,
          duration: 0.5,
        },
        "<"
      )
      .to(
        popup.querySelector(".button"),
        { left: "75vw", duration: 0.6 },
        "0.2"
      );

    return tl; // Return the timeline to control it later
  }

  // Footer anim
  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: document.querySelector("footer"),
      start: "top bottom",
    },
  });

  tlFooter.from(document.querySelector(".footer-logo-dargaud"), {
    y: 90,
    duration: 0.3,
  });
  tlFooter.from(document.querySelectorAll(".footer-social"), {
    y: 90,
    duration: 0.3,
    stagger: 0.1,
  });

  // Parallax effect
  const container = document.querySelector(".hero");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,

      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  tl.to("#hero-1", {
    y: -300,
    scale: 1.1,
  });

  tl.to(
    "#hero-2",
    {
      y: -100,
    },
    "<"
  );
  tl.to(
    "#hero-3",
    {
      y: 50,
      scale: 0.9,
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
});
