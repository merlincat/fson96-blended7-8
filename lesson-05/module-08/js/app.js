//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[accordion.html](./accordion.html) та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const listAccordionEl = document.querySelector('.js-accordion-list');

const onListAccordionClick = (event) => {
    if(event.target.nodeName !== 'BUTTON') return;

    event.target.nextElementSibling.classList.toggle('active'); 
}

listAccordionEl.addEventListener('click', onListAccordionClick);


//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу[pagination.html](./pagination.html) для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */
