import {ScrollLock} from '../../utils/scroll-lock';

const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const LINK_CLASS = '.nav__link';
  const root = document.querySelector('.header');
  const container = root.querySelector('.header__wrapper');
  const toggle = root.querySelector('.toggle');
  const nav = root.querySelector('.nav');

  const onDocumentKeydown = (evt) => evt.key === 'Escape' ? closeMenu() : null;

  const onLinkClick = (evt) => evt.target.matches(LINK_CLASS) ? closeMenu() : null;

  const isMenu = (evt) => (evt.target.closest('.header') && evt.target.closest('.toggle') || evt.target.closest('.nav')) ? evt.preventDefault() : closeMenu();

  const onDocumentOutside = () => {
    closeMenu();
  };

  function openMenu() {
    container.classList.add(OPENED_CLASS);
    toggle.classList.add(OPENED_CLASS);
    nav.classList.add(OPENED_CLASS);
    document.addEventListener('keydown', onDocumentKeydown);
    nav.addEventListener('click', onLinkClick);
    document.addEventListener('click', isMenu);
    ScrollLock.disableScrolling();
    document.addEventListener('click', onDocumentOutside);
  }

  function closeMenu() {
    container.classList.remove(OPENED_CLASS);
    toggle.classList.remove(OPENED_CLASS);
    nav.classList.remove(OPENED_CLASS);
    document.removeEventListener('keydown', onDocumentKeydown);
    nav.removeEventListener('click', onLinkClick);
    document.removeEventListener('click', isMenu);
    ScrollLock.enableScrolling();
    document.removeEventListener('click', onDocumentOutside);
  }

  toggle.addEventListener('click', () => !toggle.classList.contains(OPENED_CLASS) ? openMenu() : closeMenu());
};

export {addToggleMenu};
