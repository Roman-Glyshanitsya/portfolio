'use strict';

function imagesInit() {
  const images = document.querySelectorAll('.work__image');
  if (images.lenght) {
    images.forEach(image => {
      const imageItem = image.querySelector('img');
      const padding = (imageItem.offsetHeight / imageItem.offsetWidth) * 100;
      image.style.paddingBottom = `${padding}%`;
      imageItem.classList.add('init');
    });
  }
}

function gridInit() {
  const items = document.querySelector('.works__items-list');
  const itemsGrid = new Isotope(items, {
    itemSelector: '.work',
    masonry: {
      fitWidth: true,
      gutter: 30,
      horizontalOrder: true,
    },
  });

  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.filter-works__item')) {
      const filterItem = targetElement.closest('.filter-works__item');
      const filterValue = filterItem.dataset.filter;
      const filterActiveItem = document.querySelector('.filter-works__item.active');

      filterValue === '*'
        ? itemsGrid.arrange({ filter: `` })
        : itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]` });

      filterActiveItem.classList.remove('active');
      filterItem.classList.add('active');

      e.preventDefault();
    }
  }
}

window.addEventListener('load', windowLoad);

function windowLoad() {
  imagesInit();
  gridInit();
}
