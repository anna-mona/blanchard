// Header-menu

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__list-name-realism').addEventListener('click', function() {
    document.querySelector('.header__bottom-block-realism').classList.toggle('is-active'),
    document.querySelector('.header__list-name-realism').classList.toggle('is-active')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__list-name-impressionism').addEventListener('click', function() {
    document.querySelector('.header__bottom-block-impressionism').classList.toggle('is-active'),
    document.querySelector('.header__list-name-impressionism').classList.toggle('is-active')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__list-name-post-impressionism').addEventListener('click', function() {
    document.querySelector('.header__bottom-block-post-impressionism').classList.toggle('is-active'),
    document.querySelector('.header__list-name-post-impressionism').classList.toggle('is-active')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__list-name-avant-garde').addEventListener('click', function() {
    document.querySelector('.header__bottom-block-avant-garde').classList.toggle('is-active'),
    document.querySelector('.header__list-name-avant-garde').classList.toggle('is-active')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__list-name-futurism').addEventListener('click', function() {
    document.querySelector('.header__bottom-block-futurism').classList.toggle('is-active'),
    document.querySelector('.header__list-name-futurism').classList.toggle('is-active')
  })
});

// Hero-swiper

const swiper = new Swiper('.section-hero', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
});




