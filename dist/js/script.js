
new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
});


new WOW().init();


const burger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  burger.classList.toggle('active');
});

// closeElem.addEventListener('click', () => {
//   menu.classList.remove('active');
// });