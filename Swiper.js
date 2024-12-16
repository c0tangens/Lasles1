var swiper = new Swiper(".mySwiper", {
    loop: true, // Зацикливание
    slidesPerView: 3, // Количество видимых слайдов
    spaceBetween: 30, // Отступ между слайдами
    centeredSlides: false,
    navigation: {
      nextEl: ".custom-next", // Кнопка "вперед"
      prevEl: ".custom-prev", // Кнопка "назад"
    },
    pagination: {
      el: ".custom-pagination", // Используем твой кастомный класс
      clickable: true, // Пагинация кликабельная
      bulletClass: "swiper-pagination-bullet", // Базовый класс точки
      bulletActiveClass: "swiper-pagination-bullet-active", // Активная точка
    },
  });
  
  