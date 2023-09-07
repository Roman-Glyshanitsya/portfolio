const icon = document.querySelector('[dark-theme]');
const text = document.querySelector('.dark__theme__text');

icon.onclick = function () {
  document.body.classList.toggle('dark__theme__mode');

  if (document.body.classList.contains('dark__theme__mode')) {
    text.textContent = 'Switch light';
  } else {
    text.textContent = 'Switch dark';
  }
};
