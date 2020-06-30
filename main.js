const menu = document.querySelector('#menu_burger');
const nav = document.querySelector('#navbav');

menu.addEventListener('click', function () {
	nav.classList.toggle('active');
	menu.classList.toggle('isActive');
});
