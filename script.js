const buttons = document.querySelectorAll('.section3_button');

buttons.forEach(button => {
    // Находим плашку, соответствующую кнопке
    const tile = button.closest('.section3_tile');

    // Добавляем событие наведения на кнопку
    button.addEventListener('mouseenter', () => {
        tile.classList.add('section3_tile_hovered'); // Добавляем класс при наведении
    });

    button.addEventListener('mouseleave', () => {
        tile.classList.remove('section3_tile_hovered'); // Убираем класс при уходе курсора
    });
});
// var swiper = new Swiper(".mySwiper", {
//     loop: true, 
//     navigation: {
//       nextEl: ".custom-next", // Указываем свой класс для кнопки "вперед"
//       prevEl: ".custom-prev", // Указываем свой класс для кнопки "назад"
//     },
//     pagination: {
//       el: ".custom-pagination", // Свой класс для пагинации
//       clickable: true,
//     },
//   });
  
  

