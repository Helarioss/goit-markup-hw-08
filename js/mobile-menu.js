(() => {
  const menuBtnRef = document.querySelector('[data-menu-btn]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === true || false;

    menuBtnRef.classList.toggle('btn-menu--open');

    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('header__menu-container--open');
  });
})();
