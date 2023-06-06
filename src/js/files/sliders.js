import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

export default function sliders() {
  const offerSliders = document.querySelectorAll(".offer__slider");
  if (offerSliders.length) {
    offerSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 700,
        simulateTouch: false,
        navigation: {
          nextEl: " .offer__slider .offer__slider-btn--next",
          prevEl: " .offer__slider .offer__slider-btn--prev",
        },
      });
    });
  }
}
