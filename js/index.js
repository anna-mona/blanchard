// Header-menu

let link = document.querySelectorAll('.header__botoom-nav-item')

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', activeLink);
}

function activeLink(event) {
  event.currentTarget.classList.toggle('is-active');

  for (let j = 0; j < link.length; j++) {

    if(link[j] !== event.currentTarget) {
      link[j].classList.remove('is-active');
    }
  }
}

// Hero-swiper

const swiper = new Swiper('.section-hero__swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
});




