const body = document.body;
const slides = document.querySelectorAll('.slide'); //creates slide node list similar to array
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}

	setBgToBody();
	setActiveSlide();
});

leftBtn.addEventListener('click', () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	setBgToBody();
	setActiveSlide();
});

setBgToBody();

// matches background image to current slide
function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// loops through slides, adds/removes active class from current slide
function setActiveSlide() {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});

	slides[activeSlide].classList.add('active');
}
