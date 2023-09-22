(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();

// Icon rotate
const svgElement = document.getElementById('mySvg');

svgElement.addEventListener('click', () => {
  svgElement.classList.toggle('active');
});

// Anchor
const mobileMenuRef = document.querySelector('[data-menu]');

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      if (mobileMenuRef.classList.contains('is-open')) {
        mobileMenuRef.classList.remove('is-open');
        svgElement.classList.remove('active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });

      e.preventDefault();
    }
  }
}
