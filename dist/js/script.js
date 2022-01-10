new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Pagination
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
      return '<span class="' + currentClass + '"></span>' +
        '<div class="oblique-divider"></div>' +
        '<span class="' + totalClass + '"></span>';
    },
  },
});


// Burger menu for phone
const burger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  burger.classList.toggle('active');
});


// Footer menu phone
// let footerButton = document.querySelectorAll('.footer__header');
// let footerMenu = document.querySelector('.footer__ul');

// footerButton.forEach(accordionItem => {
//   accordionItem.footerMenu.addEventListener('click', (e) => {
//     accordionItem.classList.toggle('active');
//   });

// });



// function show() {
//   footerButton.forEach(el =>
//     el.addEventListener('click', function () {
//       footerButton.forEach(item => item.classList.toggle('active'));
//       footerMenu.forEach(item => item.classList.toggle('active'));
//     })
//   );
// }

// show();



// const accordion_items_elms = document.querySelectorAll('.accordion .accordion__item');

// accordion_items_elms.forEach(accordionItem => {

//   accordionItem.querySelector('.accordion__item__head').addEventListener('click', (e) => {
//     accordionItem.classList.toggle('active');
//   });

// });

const footerUl = document.querySelectorAll('.footer__ul');

footerUl.forEach(accordionItem => {

  accordionItem.querySelector('.footer__header').addEventListener('click', (e) => {
    accordionItem.classList.toggle('active');
  });

});