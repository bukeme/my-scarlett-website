const hamburgerMenu = document.querySelector('.nav__hamburger-menu')



hamburgerMenu.addEventListener('click', function() {
	this.classList.toggle('active')
})