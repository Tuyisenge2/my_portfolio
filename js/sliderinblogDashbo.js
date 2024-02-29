
var swiper = new Swiper(".blog-for-swiper", {
    slidesPerView: 2,
    spaceBetween:30,
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
  });
  