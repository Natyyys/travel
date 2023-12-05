import Swiper from '../vendor/swiper';

const toursSlider = document.querySelector('[data-tours-slider]');
const buttonNext = document.querySelector('[data-tours-prev]');
const buttonPrev = document.querySelector('[data-tours-next]');

function setToursSlider() {
  return new Swiper(toursSlider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
        initialSlide: 4,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        initialSlide: 5,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 6,
      },
    },
  });
}

const initToursSlider = () => {
  if (toursSlider) {
    setToursSlider();
  }
};

export {initToursSlider};
