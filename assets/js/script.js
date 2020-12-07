const corona = document.querySelector('.corona-l1');
const coronaOverlay = document.querySelector('.corona-l2');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  corona.style.top = value + 1 + 'px';
  coronaOverlay.style.left = value + 1 + 'px';

})
