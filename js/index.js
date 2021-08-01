// Hero-swiper

const swiper = new Swiper('.section-hero', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
});

// Select

const elements = document.querySelectorAll('.section-hero__select');
elements.forEach(el => {
  const choices = new Choices(el, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });
});

document.querySelector('[data-value="tintoretto"]').classList.add('section-hero__tintoretto');
document.querySelector('[data-value="friedrich"]').classList.add('section-hero__friedrich');
document.querySelector('[data-value="leonardo"]').classList.add('section-hero__leonardo');
document.querySelector('[data-value="verrocchio"]').classList.add('section-hero__verrocchio');

document.querySelector('[data-value="monet"]').classList.add('section-hero__monet');
document.querySelector('[data-value="sisley"]').classList.add('section-hero__sisley');
document.querySelector('[data-value="manet"]').classList.add('section-hero__manet');
document.querySelector('[data-value="renoir"]').classList.add('section-hero__renoir');

document.querySelector('[data-value="van-gogh"]').classList.add('section-hero__van-gogh');
document.querySelector('[data-value="cezanne"]').classList.add('section-hero__cezanne');
document.querySelector('[data-value="gauguin"]').classList.add('section-hero__gauguin');
document.querySelector('[data-value="seurat"]').classList.add('section-hero__seurat');

document.querySelector('[data-value="kandinskiy"]').classList.add('section-hero__kandinskiy');
document.querySelector('[data-value="marinetti"]').classList.add('section-hero__marinetti');
document.querySelector('[data-value="malewicz"]').classList.add('section-hero__malewicz');
document.querySelector('[data-value="picasso"]').classList.add('section-hero__picasso');

document.querySelector('[data-value="carra"]').classList.add('section-hero__carra');
document.querySelector('[data-value="pratella"]').classList.add('section-hero__pratella');
document.querySelector('[data-value="severini"]').classList.add('section-hero__severini');
document.querySelector('[data-value="balla"]').classList.add('section-hero__balla');

document.querySelectorAll('.choices__list[role="listbox"]').forEach(function (el){
  el.classList.add("section-hero__scroll");
  el.setAttribute('data-simplebar', '');
  });



