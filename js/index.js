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

var swiperHero = new Swiper('.section-hero__swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
});

// Gallery-swiper

var swiperGallery = new Swiper(".section-gallery__swiper-container", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 43,
  pagination: {
    el: ".section-gallery__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".section-gallery__swiper-button-next",
    prevEl: ".section-gallery__swiper-button-prev",
    clickable: true,
  },
});

// Select

const element = document.querySelector('.section-gallery__select');
const choicesGallery = new Choices(element, {
  silent: true,
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});





