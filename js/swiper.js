const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
    disabledClass: 'swiper-button-disabled',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  mousewheel: {
    invert: false,
    releaseOnEdges: true,
    eventsTarget: '.section__about',
  },

  slidesPerView: 2.3,
});
