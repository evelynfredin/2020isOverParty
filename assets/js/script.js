// Intro background
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
    year.style.transform  = "scale(" + value * 0.01 + ")";
}
})


// Maradona was the Kanye of football
const quote = document.querySelector('.quote');
const url = 'https://marad10s.evelynfredin.com/api/';

const maradona = document.querySelector('button.no-button');
maradona.addEventListener('click', () => {
  quote.classList.add('on');
  fetch(url)
  .then((res) => {
      return res.json();
  })
  .then((json) => {
      quote.textContent = json.quote;
  });
});


// Recycled animations
const isInViewport = (elem) => {
	let distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

const slideAnim = document.querySelectorAll('.hidden');
slideAnim.forEach(element => {
    window.addEventListener('scroll', function () {
        if (isInViewport(element)) {
            element.classList.add('slide-in');
        }
    },
    false);
});


// Trump
const crySection = document.querySelector('.cry-here');
const cryButton = document.querySelector('.make-him-cry');
let interval = 0;

const loser = [
  'assets/img/trump-cry-baby.png',
  'assets/img/trump-loser.png',
  'assets/img/loser-bk.png',
  'assets/img/loser-wt.png'
];

const imgTemplate = (element) => {
    return `
  <img src="${element}" alt="RIGGED ELECTION">
  `;
};


const loserLoop = () => {
  let loserRainfall = document.createElement("div");
  loserRainfall.classList.add("loserRainfall");
  let loserImg = imgTemplate(loser[Math.floor(Math.random() * loser.length)]);
  loserRainfall.innerHTML = loserImg;
  loserRainfall.style.left = Math.random() * 100 + "vw";
  loserRainfall.style.animationDuration = Math.random() * 2 + 1 + "s"
  crySection.appendChild(loserRainfall);
}

cryButton.addEventListener('click', () => {
  if(interval > 0) {
    cryButton.textContent = 'You can go now!';
    clearInterval(interval);
    let loserDivs = crySection.lastChild;
    while(loserDivs) {
      crySection.removeChild(loserDivs);
      loserDivs = crySection.lastChild;
    }
    interval = 0;
    return;
  }
  cryButton.textContent = 'Oh stahp it!';
  interval = setInterval(loserLoop, 500);
});
