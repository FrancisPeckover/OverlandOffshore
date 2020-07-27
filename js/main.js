document.addEventListener('DOMContentLoaded', function() {
	addFooter();
	addNav();
	activePage();
});

const mobileNavRight = '-82.5%';
const footerImages = [
	'../img/boat1.jpg',
	'../img/boat2.jpg',
	'../img/camping1.jpg',
	'../img/camping2.jpg',
	'../img/fishing1.jpg'
];
const links = [
	'index.html',
	'trips.html',
	'merch.html',
	'contact.html'
];

const footer = `<div class="footer-container center" id="footer-container">
		<ul class="socials-container center">
			<li class="center"><a class="fa fa-facebook" href=""></a></li>
			<li class="center"><a class="fa fa-youtube" href=""></a></li>
			<li class="center"><a class="fa fa-twitter" href=""></a></li>
			<li class="center"><a class="fa fa-instagram" href=""></a></li>
		</ul>
		<div class="mini-gallery-container center">
			<img src=${footerImages[0]} alt="">
			<img src=${footerImages[1]} alt="">
			<img src=${footerImages[2]} alt="">
			<img src=${footerImages[3]} alt="">
			<img src=${footerImages[4]} alt="">
		</div>
		<p class="copyright">(c) Overland Offshore 2020. Website by magic</p>
	</div>`;

const navigation = `<ul class="nav-desktop">
		<li class="center fill"><a class="nav-link center fill" href=${links[0]}>Home</a></li>
		<li class="center fill"><a class="nav-link center fill" href=${links[1]}>Adventures</a></li>
		<li class="center fill"><a class="nav-link center fill" href=${links[2]}>Merch</a></li>
		<li class="center fill"><a class="nav-link center fill" href=${links[3]}>Drop us a line</a></li>
	</ul>
	
	<div id="mobile-nav" class="mobile-nav" style="right: ${mobileNavRight};">
		<a onclick="toggleMobileNav()" href="javascript:void(0);" class="mobile-nav-button center"><i class="fa fa-bars"></i></a>
		<ul class="nav-list">
			<li><a class="nav-link" href="index.html">Home</a></li>
			<li><a class="nav-link" href="trips.html">Adventures</a></li>
			<li><a class="nav-link" href="merch.html">Merch</a></li>
			<li><a class="nav-link" href="contact.html">Drop us a line</a></li>
		</ul>
	</div>`;

function toggleMobileNav() {
	var mobNav = document.getElementById('mobile-nav');
	if (mobNav.style.right == mobileNavRight) {
		mobNav.style.right = '0';
	} else {
		mobNav.style.right = mobileNavRight;
	}
}

function addFooter() {
	document.body.innerHTML += footer;
}

function addNav() {
	document.body.innerHTML += navigation;
}

function activePage() {
	var links = document.getElementsByClassName('nav-link');
	for (i = 0; i < links.length; i++) {
		if (document.body.id == links[i].innerHTML) {
			links[i].classList.add('active');
		}
	}
}
