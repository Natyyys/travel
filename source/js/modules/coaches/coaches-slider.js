import Swiper from '../../vendor/swiper';

const coachesSlider = document.querySelector('[data-coaches-slider]');
const buttonNext = document.querySelector('[data-coaches-prev]');
const buttonPrev = document.querySelector('[data-coaches-next]');

const initCoachesSlider = () => {
  let swiper = new Swiper(coachesSlider, {
    loop: false,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false,
      },
    },
  });

  return swiper;
};

export {initCoachesSlider};
