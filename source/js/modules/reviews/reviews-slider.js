import Swiper from '../../vendor/swiper';

const reviewsSlider = document.querySelector('[data-reviews-slider]');
const buttonNext = document.querySelector('[data-reviews-prev]');
const buttonPrev = document.querySelector('[data-reviews-next]');

const initReviewsSlider = () => {
  let swiper = new Swiper(reviewsSlider, {
    loop: true,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        allowTouchMove: false,
      },
    },
  });

  return swiper;
};

export {initReviewsSlider};
