import Swiper from '../../vendor/swiper';

const featuresSlider = document.querySelector('[data-features-slider]');
const buttonNext = document.querySelector('[data-features-prev]');
const buttonPrev = document.querySelector('[data-features-next]');
let featuresSwiper;

const initFeaturesSlider = () => {
  if (featuresSlider && window.innerWidth > 1199) {
    featuresSwiper = new Swiper(featuresSlider, {
      loop: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      breakpoints: {
        1200: {
          initialSlide: 2,
          spaceBetween: 30,
          slidesPerView: 'auto',
          centeredSlides: true,
          allowTouchMove: false,
        },
      },
    });
  }
};

const destroySwiper = () => {
  if (window.innerWidth <= 1200 && featuresSwiper) {
    featuresSwiper.destroy();
    document.querySelector('.features__slider').computedStyleMap.display = 'block';
  } else if (featuresSwiper && !featuresSwiper.initialized) {
    initFeaturesSlider();
  }
};

const handleResize = () => {
  destroySwiper();
};

window.addEventListener('resize', handleResize);

export {initFeaturesSlider, handleResize};
