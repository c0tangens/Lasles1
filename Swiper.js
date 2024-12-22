var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    pagination: {
      el: ".custom-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active", 
    },
  });
  
  