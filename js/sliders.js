
var swiper = new Swiper(".blog-for-swiper", {
  slidesPerView: 3,
  spaceBetween:79,
  loop:true,
  fade:true,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
 
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  breakpoints:{
   0:{
  slidesPerView: 3,
   },
   520:{
  slidesPerView: 3,

   },
   920:{
  slidesPerView: 3,

   }
  },
});
