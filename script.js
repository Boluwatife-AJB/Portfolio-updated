

// Toggle Menu
const navToggle = document.getElementById('nav-toggle');
const navToggleOpen = document.getElementById('nav-open');
const navToggleClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');
function revealMenu() {
  if (navToggleOpen.style.display === 'none') {
    navToggleClose.style.display = 'none';
    navToggleOpen.style.display = 'block';
    navMenu.classList.remove('show');
  } else {
    navMenu.classList.add('show');
    navToggleClose.style.display = 'block';
    navToggleOpen.style.display = 'none';
  }
}

navToggle.addEventListener('click', revealMenu);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

// SCROLL HOME
sr.reveal('.home__title', {});
sr.reveal('.home__scroll', { delay: 200 });
sr.reveal('.home__title', { origin: 'right', delay: 400 });
sr.reveal('.home__content-button', { origin: 'top', delay: 700 });

// SCROLL ABOUT
sr.reveal('.about__img', { delay: 500 });
sr.reveal('.about__subtitle', { delay: 300 });
sr.reveal('.about__profession', { delay: 400 });
sr.reveal('.about__text', { delay: 500 });
sr.reveal('.about__social-icon', { delay: 600, interval: 200 });
// SCROLL SKILL
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 });
sr.reveal('.skills__img', { delay: 400 });
// SCROLL PORTFOLIO
sr.reveal('.portfolio__img', { interval: 200 });
// SCROLL CONTACT
sr.reveal('.contact__subtitle', {});
sr.reveal('.contact__text', { interval: 200 });
sr.reveal('.contact__input', { delay: 400 });
sr.reveal('.contact__button', { delay: 600 });
