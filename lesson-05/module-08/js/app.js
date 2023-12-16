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
const listPaginationEl = document.querySelector(".js-pagination");
// const refs = {
//   listPagination: document.querySelector(".js-pagination"), 
// }
const onListPaginationClick = (event) => {
  if (event.target.nodeName !== 'LI') return;
  
  const clickBtn = event.target;
  const activeBtn = listPaginationEl.querySelector(".active");
  

  if (clickBtn.dataset.type === "page") {
    clickBtn.classList.add("active");
    activeBtn.classList.remove("active");
  }
  
  if (clickBtn.dataset.type === "next") {
    const nextBtn = activeBtn.nextElementSibling;
    
    if (nextBtn.dataset.type === "page") {
      activeBtn.classList.remove("active");
      nextBtn.classList.add("active");
    } 
  }  

  if (clickBtn.dataset.type === "prev") {
    const prevBtn = activeBtn.previousElementSibling;
    
    if (prevBtn.dataset.type === "page") {
      activeBtn.classList.remove("active");
      prevBtn.classList.add("active");
    } 
  }  
}
listPaginationEl.addEventListener("click", onListPaginationClick);
