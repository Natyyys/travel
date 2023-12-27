import '../../utils/scroll-lock';

const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const root = document.querySelector('[data-header="data-header"]');
  const container = root.querySelector('[data-container="header-wrapper"]');
  const toggle = root.querySelector('[data-toggle="toggle-menu"]');
  const nav = root.querySelector('[data-menu="menu-nav"]');

  const onDocumentKeydown = (evt) => evt.key === 'Escape' ? closeMenu() : null;

  const onLinkClick = (evt) => evt.target.matches('[data-link="link-menu"]') ? closeMenu() : null;

  const isMenu = (evt) => (evt.target.closest(root) && evt.target.closest(toggle) || evt.target.closest(nav)) ? evt.preventDefault() : closeMenu();

  function openMenu() {
    container.classList.add(OPENED_CLASS);
    toggle.classList.add(OPENED_CLASS);
    nav.classList.add(OPENED_CLASS);
    document.addEventListener('keydown', onDocumentKeydown);
    nav.addEventListener('click', onLinkClick);
    document.addEventListener('click', isMenu);
    window.scrollLock.disableScrolling();
    document.addEventListener('click', onDocumentOutside);
  }

  function closeMenu() {
    container.classList.remove(OPENED_CLASS);
    toggle.classList.remove(OPENED_CLASS);
    nav.classList.remove(OPENED_CLASS);
    document.removeEventListener('keydown', onDocumentKeydown);
    nav.removeEventListener('click', onLinkClick);
    document.removeEventListener('click', isMenu);
    window.scrollLock.enableScrolling();
    document.removeEventListener('click', onDocumentOutside);
  }

  function onDocumentOutside(evt) {
    if (!evt.target === root || !root.contains(evt.target)) {
      closeMenu();
    }
  }

  toggle.addEventListener('click', () => !toggle.classList.contains(OPENED_CLASS) ? openMenu() : closeMenu());
};

export {addToggleMenu};
