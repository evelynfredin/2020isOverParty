const corona = document.querySelector('.corona-l1');
const coronaOverlay = document.querySelector('.corona-l2');
const year = document.querySelector('.year');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  corona.style.top = value + 1 + 'px';
  coronaOverlay.style.left = value + 1 + 'px';

  if(value === 0) {
    year.style.transform = "scale(" + 1 + ")";
} else {
    year.style.transform  = "scale(" + value * 0.05 + ")";
}
})


//Quotes
const quote = document.querySelector('.quote');
const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

fetch(url)
.then((res) => {
    return res.json();
})
.then((json) => {
    quote.textContent = json[0].quote;
});
