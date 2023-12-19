import Swiper from '../../vendor/swiper';

const gallerySlider = document.querySelector('[data-gallery-slider]');
const buttonNext = document.querySelector('[data-gallery-prev]');
const buttonPrev = document.querySelector('[data-gallery-next]');

const initGallerySlider = () => {
  let swiper = new Swiper(gallerySlider, {
    loop: true,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        // spaceBetween: 3,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 'auto',
        // spaceBetween: 5,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 'auto',
        // spaceBetween: 5,
        allowTouchMove: false,
      },
    },
  });

  return swiper;
};

export {initGallerySlider};
