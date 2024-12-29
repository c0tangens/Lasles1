const buttons = document.querySelectorAll('.plans__button');

buttons.forEach(button => {
    const tile = button.closest('.plans__item');

    button.addEventListener('mouseenter', () => {
        tile.classList.add('plans__item-hovered');
    });

    button.addEventListener('mouseleave', () => {
        tile.classList.remove('plans__item-hovered');
    });
});
  
  

