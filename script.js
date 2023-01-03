const hamburgerMenu = document.querySelector('.nav__hamburger-menu')
const navItemsContainer = document.querySelector('.nav__nav-items-container')
const navItems = document.querySelectorAll('.nav__nav-items-container--nav-item')



hamburgerMenu.addEventListener('click', function() {
	this.classList.toggle('active')
	navItemsContainer.classList.toggle('active')
})

navItems.forEach(function(navItem, index) {
	navItem.style.transitionDelay = `${index * 0.05}s`
})