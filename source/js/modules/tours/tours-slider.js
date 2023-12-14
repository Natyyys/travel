import Swiper from '../../vendor/swiper';

const toursSlider = document.querySelector('[data-tours-slider]');
const buttonNext = document.querySelector('[data-tours-prev]');
const buttonPrev = document.querySelector('[data-tours-next]');

const initToursSlider = () => {
  let swiper = new Swiper(toursSlider, {
    loop: false,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });

  return swiper;
};

export {initToursSlider};
