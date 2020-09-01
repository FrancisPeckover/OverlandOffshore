document.addEventListener('DOMContentLoaded', function() {
	addFooter();
	addNav();
	activePage();
	autoCarousel();
});

var prevPos = window.pageYOffset;
window.onscroll = hideHeader;

const carouselImages = [
	'../img/camping1.jpg',
	'../img/camping2.jpg',
	'../img/boat1.jpg',
	'../img/boat2.jpg',
	'../img/fishing1.jpg'
];

const links = [
	'index.html',
	'trips.html',
	'merch.html',
	'contact.html'
];

const navigation = `
<div id="header" class="header">
	<a href="#" class="logo">
		<img class="fill" src=${carouselImages[0]} alt="">
	</a>
	<ul class="nav center">
		<a class="nav-link center fill" href=${links[0]}><i class="fa fa-home"></i><p>Home</p></a>
		<a class="nav-link center fill" href=${links[1]}><i class="fa fa-ship"></i><p>Adventures</p></a>
		<a class="nav-link center fill" href=${links[2]}><i class="fa fa-gift"></i><p>Merch</p></a>
		<a class="nav-link center fill" href=${links[3]}><i class="fa fa-envelope"></i><p>Drop a line</p></a>
	</ul>
</div>`;

const footer = `<div class="footer center">
		<ul class="socials center">
			<li class="center"><a class="fa fa-facebook" href=""></a></li>
			<li class="center"><a class="fa fa-youtube" href=""></a></li>
			<li class="center"><a class="fa fa-twitter" href=""></a></li>
			<li class="center"><a class="fa fa-instagram" href=""></a></li>
		</ul>
		<div id="carousel" class="carousel center">
		<button class="fa fa-arrow-left center arrow" onclick="rotateCarousel(-1)"></button>
		<img class="bg-bg-img" src=${carouselImages[0]} alt="">
		<img class="bg-img" src=${carouselImages[1]} alt="">
		<img src=${carouselImages[2]} alt="">
		<img class="bg-img" src=${carouselImages[3]} alt="">
		<img class="bg-bg-img" src=${carouselImages[4]} alt="">
		<button class="fa fa-arrow-right center arrow" onclick="rotateCarousel(1)"></button>
		</div>
		<button class="to-top" onclick="setScroll(0)">Back to top</button>
		<p class="copyright"><i class="fa fa-copyright"></i> Overland Offshore 2020. Website by Duality Designs</p>
	</div>`;

function addFooter() {
	document.body.innerHTML += footer;
}

function addNav() {
	document.body.innerHTML += navigation;
}

function activePage() {
	var links = document.getElementsByClassName('nav-link');
	for (i = 0; i < links.length; i++) {
		if (links[i].innerHTML.includes(document.body.id)) {
			links[i].classList.add('active');
		}
	}
}

function setScroll(offset) {
	scrollTo(0, offset);
}

function hideHeader() {
	if (window.screen.width > 600) {
		var curPos = window.pageYOffset;
		if (prevPos > curPos) {
			document.getElementById('header').style.opacity = '1';
		} else {
			document.getElementById('header').style.opacity = '0';
		}
		prevPos = curPos;
	}
}

function autoCarousel() {
	let timer = 5; //seconds

	rotateCarousel(1);

	setTimeout(autoCarousel, timer * 1000);
}

function rotateCarousel(x) {
	imgElements = getCarouselImgElements();

	for (i = 0; i < imgElements.length; i++) {
		let editSrc = '../' + imgElements[i].src.split('/').splice(3, 2).join('/');
		let currentImg = carouselImages.indexOf(editSrc);
		if (currentImg + x > carouselImages.length - 1) {
			imgElements[i].src = carouselImages[0];
		} else if (currentImg + x < 0) {
			imgElements[i].src = carouselImages[carouselImages.length - 1];
		} else {
			imgElements[i].src = carouselImages[currentImg + x];
		}
	}
}

function getCarouselImgElements() {
	let imgElements = [];
	for (i = 0; i < document.getElementById('carousel').childNodes.length; i++) {
		if (document.getElementById('carousel').childNodes[i] instanceof HTMLImageElement) {
			imgElements.push(document.getElementById('carousel').childNodes[i]);
		}
	}
	return imgElements;
}
