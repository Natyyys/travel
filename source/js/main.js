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
import {requiredInput} from './modules/required-form';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    addToggleMenu();
    initVideoPlayer();
    initAudioPlayer();
    initSwiperHero();
    initToursSlider();
    initCoachesSlider();
    initReviewsSlider();
    initFeaturesSlider();
    handleResize();
    initGallerySlider();
    const form = new Form();
    window.form = form;
    form.init();
    requiredInput();
  });
});
