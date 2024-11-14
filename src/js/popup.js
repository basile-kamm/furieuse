import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  // Random rotate for popup frame
  const frames = document.querySelectorAll(".popup-frame");

  frames.forEach(function (frame) {
    let randomNum = Math.floor(Math.random() * 20) - 10; //Return random number between -10 & 10
    frame.style.rotate = `${randomNum}deg`;
  });

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
          x: 0,
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
});
