// const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener('click', onMenuLink);
//   });

//   function onMenuLink(e) {
//     const menuLink = e.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue =
//         gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: 'smooth',
//       });

//       e.preventDefault();
//     }
//   }
// }