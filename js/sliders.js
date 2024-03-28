
var swiper = new Swiper(".blog-for-swiper", {
  slidesPerView: 3,
  spaceBetween:10,
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
slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
          },
    950:{
     slidesPerView: 3,
       }

  }
});
