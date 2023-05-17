const hamburgerMenu = document.querySelector('.header__hamburger-menu');
const offScreenMenu = document.querySelector('.header__off-screen-menu');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  document.body.classList.toggle("lock");
});

const navLinks = document.querySelectorAll("#navigation-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (_) => {
    if (hamburgerMenu.classList.contains("active")) {
      document.body.classList.remove("lock");
      hamburgerMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
    }
  }
  );
});
