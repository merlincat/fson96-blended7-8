const bodyEl = document.querySelector('body')
// console.log(bodyEl);

const titleEl = document.querySelector('#title')
// console.log(titleEl);

const listEl = document.querySelector('.list')
// console.log(listEl);

const dataTopicEls = document.querySelectorAll('[data-topic]')
// console.log(dataTopicEls);
// dataTopicEls.forEach(el => {
//     console.log(el);
// })

const dataTopicEl = document.querySelector('[data-topic]')
// console.log(dataTopicEl);
// console.log(listEl.firstElementChild);
// console.log(dataTopicEls[0]);

// console.log(listEl.lastElementChild);
// console.log(dataTopicEls[dataTopicEls.length - 1]);

// console.log(titleEl.nextElementSibling);

const subTitleEls = document.querySelectorAll('h3')

// subTitleEls.forEach(el => {
//     el.classList.add('active');
//     el.style.color = 'green';
// })

const liEl = document.querySelector('[data-topic="navigation"]')
// console.log(liEl);
liEl.style.backgroundColor = "yellow"

liEl.lastElementChild.textContent = "Я змінив тут текст!"

const currentTopic = "manipulation"
const topicEl = document.querySelector(`[data-topic="${currentTopic}"]`)
// console.log(topicEl);
topicEl.style.backgroundColor = "blue"


const compTitleEl = document.querySelector(".completed")
// console.log(compTitleEl);
compTitleEl.parentNode.remove()

const paragrafEl = document.createElement("p")
paragrafEl.textContent = "Об'єктна модель документа (Document Object Model)"


titleEl.after(paragrafEl)

const liElement = document.createElement("li")
const topTitle = document.createElement("h3")
const pEl = document.createElement("p")
topTitle.textContent = "Властивість innerHTML"
pEl.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"
liElement.appendChild(topTitle)
liElement.appendChild(pEl)
// listEl.append(liElement)

// listEl.insertAdjacentHTML("beforeend", liElement)

const markup = `<li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>`
listEl.insertAdjacentHTML("beforeend", markup)

listEl.innerHTML = ""