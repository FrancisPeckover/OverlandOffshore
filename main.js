function toggleMobileNav() {
	var mobNav = document.getElementById('nav-mobile');
	if (mobNav.style.display == 'none') {
		mobNav.style.display = 'flex';
	} else {
		mobNav.style.display = 'none';
	}
	console.log(mobNav.style.display);
}
