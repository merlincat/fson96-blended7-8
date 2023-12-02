const bodyEl = document.querySelector("body");
// console.log(bodyEl);

const titleEl = document.querySelector("#title");
// console.log(titleEl);

const listEl = document.querySelector(".list");
// console.log(listEl);

const dataTopicEls = document.querySelectorAll("[data-topic]");
// console.log(dataTopicEls);
// dataTopicEls.forEach(el => {
//     console.log(el);
// })

const dataTopicEl = document.querySelector("[data-topic]");
// console.log(dataTopicEl);
// console.log(listEl.firstElementChild);
// console.log(dataTopicEls[0]);

// console.log(listEl.lastElementChild);
// console.log(dataTopicEls[dataTopicEls.length - 1]);

// console.log(titleEl.nextElementSibling);

const subTitleEls = document.querySelectorAll("h3");

// subTitleEls.forEach(el => {
//     el.classList.add('active');
//     el.style.color = 'green';
// })

const liEl = document.querySelector('[data-topic="navigation"]');
// console.log(liEl);
liEl.style.backgroundColor = "yellow";

liEl.lastElementChild.textContent = "Я змінив тут текст!";

const currentTopic = "manipulation";
const topicEl = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(topicEl);
topicEl.style.backgroundColor = "blue";

const compTitleEl = document.querySelector(".completed");
// console.log(compTitleEl);
compTitleEl.parentNode.remove();

const paragrafEl = document.createElement("p");
paragrafEl.textContent = "Об'єктна модель документа (Document Object Model)";

titleEl.after(paragrafEl);

const liElement = document.createElement("li");
const topTitle = document.createElement("h3");
const pEl = document.createElement("p");
topTitle.textContent = "Властивість innerHTML";
pEl.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
liElement.appendChild(topTitle);
liElement.appendChild(pEl);
// listEl.append(liElement)

// listEl.insertAdjacentHTML("beforeend", liElement)

const markup = `<li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>`;
listEl.insertAdjacentHTML("beforeend", markup);

listEl.innerHTML = "";

const pElement = document.createElement("p");

const text = `Об'єктна модель документа Document Object Model - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

const wordsArray = text.split(/\s+/);

for (const word of wordsArray) {
  // console.log(word)
  if (word.length > 8) {
    const spanElement = document.createElement("span");
    spanElement.style.backgroundColor = "yellow";
    spanElement.textContent = word + " ";
    pElement.appendChild(spanElement);
  } else {
    pElement.innerHTML += word + " ";
  }
}
listEl.after(pElement);

//////////////////////////////////

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const blocks = 100;

const divContainerElem = document.createElement("div");
divContainerElem.classList.add("number-сontainer");

const divArray = [];

for (let i = 0; i < blocks; i++) {
  const divElem = document.createElement("div");
  divElem.classList.add("number");
  divElem.textContent = randomNumber();
  divElem.textContent % 2 === 0
    ? divElem.classList.add("even")
    : divElem.classList.add("odd");
  divArray.push(divElem);
}

// console.log(divArray);

divContainerElem.append(...divArray);
// console.log(divContainerElem);

listEl.after(divContainerElem);

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

// Приклад елементу списку
// <li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ["film_2", "film_4", "film_5"];

function createMarkup(filmArray) {
  return filmArray
    .map((item) => {
      return `<li id="${item.id}">
     <img src="${item.imgUrl}" alt="${item.title}" />
     <p>${item.title}</p>
</li>`;
    })
    .join("");
}

listEl.innerHTML = createMarkup(films);

const formEl = document.querySelector(".js-contact-form");

const inputEl = document.querySelector(".js-username-input");

// formEl.addEventListener("input", (event) => {
//   if (event.target.value.length > 6) {
//     event.target.classList.add("success");
//     event.target.classList.remove("error");
//   } else {
//     event.target.classList.add("error");
//     event.target.classList.remove("success");
//   }
// });

inputEl.addEventListener("focus", onFocusInput);

// function onFocusInput(event) {
//   event.target.value === ""
//     ? (inputEl.style.outline = "3px solid red")
//     : (inputEl.style.outline = "3px solid green");
// }
