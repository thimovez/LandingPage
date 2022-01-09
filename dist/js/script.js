new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  //Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
    dynamicBullets: true,
    //Custom bullets
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});


new WOW().init();

//burger menu for phone
const burger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  burger.classList.toggle('active');
});


// footer menu  phone
const footerButton = document.querySelectorAll('.footer__header');
const footerMenu = document.querySelectorAll('.footer__ul');
console.log(footerButton);

footerButton.addEventListener('click', () => {
  footerMenu.classList.toggle('active');
  footerButton.classList.toggle('active');
});