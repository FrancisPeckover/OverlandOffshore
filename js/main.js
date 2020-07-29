document.addEventListener('DOMContentLoaded', function() {
	addFooter();
	addNav();
	activePage();
});

var prevPos = window.pageYOffset;
window.onscroll = hideHeader;

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

const footer = `<div class="footer center">
		<ul class="socials center">
			<li class="center"><a class="fa fa-facebook" href=""></a></li>
			<li class="center"><a class="fa fa-youtube" href=""></a></li>
			<li class="center"><a class="fa fa-twitter" href=""></a></li>
			<li class="center"><a class="fa fa-instagram" href=""></a></li>
		</ul>
		<div class="gallery center">
			<img src=${footerImages[0]} alt="">
			<img src=${footerImages[1]} alt="">
			<img src=${footerImages[2]} alt="">
			<img src=${footerImages[3]} alt="">
			<img src=${footerImages[4]} alt="">
		</div>
		<p class="copyright"><i class="fa fa-copyright"></i> Overland Offshore 2020. Website by asian slave labour</p>
	</div>`;

const navigation = `
<div id="header" class="header">
	<img src="../img/fishing1.jpg" alt="">
	<ul class="nav center">
		<a class="nav-link center fill" href=${links[0]}><i class="fa fa-home"></i><p>Home</p></a>
		<a class="nav-link center fill" href=${links[1]}><i class="fa fa-ship"></i><p>Adventures</p></a>
		<a class="nav-link center fill" href=${links[2]}><i class="fa fa-gift"></i><p>Merch</p></a>
		<a class="nav-link center fill" href=${links[3]}><i class="fa fa-envelope"></i><p>Drop a line</p></a>
	</ul>
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
		if (document.body.id == links[i].innerHTML) {
			links[i].classList.add('active');
		}
	}
}

function populateTrips() {
	document.getElementById().innerHTML;
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
