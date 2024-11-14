import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Parallax effect
  const container = document.querySelector(".hero");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,

      start: "top top",
      end: "bottom top",
      scrub: 0.3,
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
