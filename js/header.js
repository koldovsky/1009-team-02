const hamburgerMenu = document.querySelector('.header__hamburger-menu');
const offScreenMenu = document.querySelector('.header__off-screen-menu');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})