const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  autoplay: {
    delay: 2000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },

  mousewheel: {
    invert: false,
    releaseOnEdges: true,
    eventsTarget: '.section__about',
  },

  slidesPerView: 2.3,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
});
