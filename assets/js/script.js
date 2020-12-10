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
    year.style.transform  = "scale(" + value * 0.05 + ")";
}
})


// Maradona was the Kanye of football
const quote = document.querySelector('.quote');
const url = 'https://marad10s.evelynfredin.com/api/';

const maradona = document.querySelector('button.no-button');
maradona.addEventListener('click', () => {
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


//isLoser = true
const crySection = document.querySelector('.cry-baby');
const cryButton = document.querySelector('.make-him-cry');

const loser = [
  'assets/img/trump-cry-baby.png',
  'assets/img/trump-loser.png',
  'assets/img/loser-bk.png',
  'assets/img/loser-wt.png'
];

const imgTemplate = (element) => {
    return `
  <img src="${element}" alt="RIGGED ELECTION" width="50px">
  `;
};

const loserLoop = () => {
  const loserRainfall = document.createElement("div");
  loserRainfall.classList.add("loserRainfall");
  let loserImg = imgTemplate(loser[Math.floor(Math.random() * loser.length)]);
  loserRainfall.innerHTML = loserImg;
  loserRainfall.style.left = Math.random() * 100 + "vw";
  loserRainfall.style.animationDuration = Math.random() * 2 + 1 + "s"
  crySection.appendChild(loserRainfall);
}

cryButton.addEventListener('click', () => {
  setInterval(loserLoop, 500);
});
