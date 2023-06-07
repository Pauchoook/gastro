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

  const massMediaSlider = document.querySelector(".mass-media__slider");
  if (massMediaSlider) {
    const swiper = new Swiper(massMediaSlider, {
      speed: 700,
      simulateTouch: false,
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: " .mass-media__slider-btn--next",
        prevEl: " .mass-media__slider-btn--prev",
      },
      breakpoints: {
        1440: {
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3
        },
        577: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });
  }
}
