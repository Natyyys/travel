import Swiper from '../../vendor/swiper';

const gallerySlider = document.querySelector('[data-gallery-slider]');
const buttonNext = document.querySelector('[data-gallery-prev]');
const buttonPrev = document.querySelector('[data-gallery-next]');

const initGallerySlider = () => {
  const swiper = new Swiper(gallerySlider, {
    loop: true,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 'auto',
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 'auto',
        allowTouchMove: false,
      },
    },
  });

  return swiper;
};

export {initGallerySlider};
