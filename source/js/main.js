import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {addToggleMenu} from './modules/header-menu/toggle';
import {initVideoPlayer} from './modules/hero/videoplayer';
import {initAudioPlayer} from './modules/hero/audioplayer';
import {initSwiperHero} from './modules/hero/hero-slider';
import {initToursSlider} from './modules/tours/tours-slider';
import {initCoachesSlider} from './modules/coaches/coaches-slider';
import {initReviewsSlider} from './modules/reviews/reviews-slider';
import {initFeaturesSlider, handleResize} from './modules/features/features-slider';
import {initGallerySlider} from './modules/gallery/gallery-slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  addToggleMenu();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    initVideoPlayer();
    initAudioPlayer();
    initSwiperHero();
    initToursSlider();
    initCoachesSlider();
    initReviewsSlider();
    initFeaturesSlider();
    handleResize();
    initGallerySlider();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
