import Swiper from "../lib/swiper-bundle.esm.browser.min.js";

new Swiper(".works-content", {
  sliderPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: ".works-arrow--prev",
    nextEl: ".works-arrow--next",
  },
  preventClicks: true,
  a11y: false,
});
