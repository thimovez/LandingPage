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
    // Custom fraction
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="'+ currentClass + '"></span>' + 
      '<div class="oblique-divider"></div>' + 
      '<span class="' + totalClass + '"></span>';
    },
  },
});


//burger menu for phone
const burger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  burger.classList.toggle('active');
});


// footer menu  phone
let footerButton = document.querySelectorAll('.footer__header');
let footerMenu = document.querySelectorAll('.footer__ul');

function show(){
  footerButton.forEach(el => 
    el.addEventListener('click', function() {
      footerButton.forEach(item => item.classList.toggle('active'));
      footerMenu.forEach(item => item.classList.toggle('active'));
    })
  );
}

show();