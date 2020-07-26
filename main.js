document.addEventListener('DOMContentLoaded', function() {
	addFooter();
	addNav();
	activePage();
});

const mobileNavRight = '-82.5%';
const footer = `<div class="footer-container" id="footer-container">
		<ul class="socials-container">
			<li><a class="fa fa-facebook" href=""></a></li>
			<li><a class="fa fa-youtube" href=""></a></li>
			<li><a class="fa fa-twitter" href=""></a></li>
			<li><a class="fa fa-instagram" href=""></a></li>
		</ul>
		<div class="mini-gallery-container">
			<img src="img/hat.jpg" alt="">
			<img src="img/hoodie.jpg" alt="">
			<img src="img/hoodie.jpg" alt="">
			<img src="img/hat.jpg" alt="">
			<img src="img/tshirt.jpg" alt="">
		</div>
		<p class="copyright">(c) Overland Offshore 2020. Website by magic</p>
	</div>`;

const navigation = `<ul class="nav-desktop">
		<li><a class="nav-link" href="index.html">Home</a></li>
		<li><a class="nav-link" href="trips.html">Adventures</a></li>
		<li><a class="nav-link" href="merch.html">Merch</a></li>
		<li><a class="nav-link" href="contact.html">Drop us a line</a></li>
	</ul>
	
	<div id="mobile-nav" class="mobile-nav" style="right: ${mobileNavRight};">
		<a onclick="toggleMobileNav()" href="javascript:void(0);" class="mobile-nav-button"><i class="fa fa-bars"></i></a>
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
