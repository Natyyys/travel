import Swiper from '../../vendor/swiper';

const toursSlider = document.querySelector('[data-tours-slider]');
const buttonNext = document.querySelector('[data-tours-prev]');
const buttonPrev = document.querySelector('[data-tours-next]');

function setToursSlider() {
  return new Swiper(toursSlider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    loop: false,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },

      768: {
        slidesPerView: 2,
        initialSlide: 3,
        spaceBetween: 18,
        allowTouchMove: true,
      },

      350: {
        slidesPerView: 1,
        initialSlide: 3,
        allowTouchMove: true,
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
