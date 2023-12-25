import Swiper from '../../vendor/swiper';
import {showButton, showCover} from './videoplayer';
import {showAudioButton, showAudioCover} from './audioplayer';

const initSwiperHero = () => {
  const swiper = new Swiper('.hero__slider', {
    speed: 500,
    loop: false,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      centeredSlides: true,
      slidesPerView: 1,
      clickable: true,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    on: {
      slideChange() {
        if (document.querySelector('.video__wrapper iframe')) {
          document.querySelector('.video__wrapper iframe').remove();
          showButton();
          showCover();
        }
        if (document.querySelector('.audio-wrapper iframe')) {
          document.querySelector('.audio-wrapper iframe').remove();
          showAudioButton();
          showAudioCover();
        }
      },
    },
  });

  return swiper;
};

export {initSwiperHero};
