
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

//burger menu
const burger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  burger.classList.toggle('active');
});


// footer menu 
const footerButton = document.querySelectorAll('.footer__header');
const footerMenu = document.querySelectorAll('.footer__ul');
console.log(footerButton);

footerButton.addEventListener('click', () => {
  footerMenu.classList.toggle('active');
  footerButton.classList.toggle('active');
});