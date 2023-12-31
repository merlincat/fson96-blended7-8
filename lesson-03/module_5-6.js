//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.
// function performOperation(a, b, callback) {
//   const result = a * b;
//   return callback(result);
// }
// function callbackFunction(num) {
//   return num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num);
// }
// const result = performOperation(20, 40, callbackFunction);
// console.log(result);

//TODO:============task-02=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 2, 5, 7, 9, 20];
// const words = ["apple", "banana", "orange", "pear"];

// function findElement(array, callback) {
//   let result = null;
//   array.forEach((element) => {
//     if (callback(element) && result === null) {
//       result = element;
//     }
//   });
//   return result;
// }
// function isEven(num) {
//   return num % 2 === 0;
// }

// function startWithO(string) {
//   return string.toLowerCase().startsWith("o");
// }
// const res1 = findElement(words, startWithO);
// const res = findElement(numbers, isEven);
// console.log(res);
// console.log(res1);

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const getNewArray = (array, pow) => array.map(element => element**pow);

// const res = getNewArray(numbers, 2);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flatArray = (array) => array.flatMap(element => element.values);

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 21 },
// ];

// const checkAge = (array) => array.some(element => element.age < 20);

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray = (array) => array.every(element => element % 2 === 0);

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];

// const getNumber = (array, value) => array.find(element => element > value);

// const res = getNumber(numbers, 3);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 200, 1000, 1, 3];

// const sortedArray = (array) => array.toSorted((a, b) => b - a)

// const res = sortedArray(numbersArray);
// console.log(res);
// console.log(numbersArray);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedArray = (array) => array.toSorted((a, b) => b.localeCompare(a));

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const ageSortedUsers = (arr) => [...arr].toSorted((a, b) => a.age - b.age);

// const res = ageSortedUsers(users);
// console.log(res);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const getAge = (array, age) => array.filter(element => element.age > age);

// const res = getAge(user, 30);
// console.log(res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = (array) => array.reduce((acc, num) => acc + num, 0);

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];

// const averageValue = (array) =>array.reduce((acc, num) => acc + num / array.length, 0)

// const res = averageValue(arr);
// console.log(res);

// ! this
//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.

const user = {
  firstName: "John",
  lastName: "Kovalski",
  age: 26,
  email: "john@gmail.com",

  getFullInfo() {
    console.log(this);
  },
  modify(key, value) {
    if (key !== "firstName" && key !== "lastName") {
      return "Невірні дані для зміни";
    }
    if (value[0] === value[0].toUpperCase() && value.length > 3) {
      this[key] = value;
    }
  },
};
// user.getFullInfo();

const newUser = Object.create(user);
newUser.firstName = "Pablo";
// newUser.getFullInfo();

// console.log(newUser);

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

// console.log(user.modify("firstMeme", "Vlad"));
// console.log(user);
//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

// const addProperty = function (key, value) {
//   this[key] = value;
// };
// user.addProperty = addProperty;
// newUser.addProperty = addProperty;
// console.log(newUser);

// user.addProperty("friends", [
//   {
//     firstName: "Mary",
//     lastName: "Smith",
//     age: 32,
//     email: "marysmith@hotmail.com",
//   },
//   {
//     firstName: "Alex",
//     lastName: "Johnson",
//     age: 45,
//     email: "alex.johnson@yahoo.com",
//   },
//   {
//     firstName: "Emily",
//     lastName: "Davis",
//     age: 19,
//     email: "emilydavis@gmail.com",
//   },
// ]);

// console.log(user);

//TODO:=========task-04=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//   firstName: "Bob",
//   lastName: "Lasso",
//   age: 50,
//   email: "BodLasso@gmail.com",
// };
// user.getFullInfo.call(obj);

//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

// function showFullUser(message, num) {
//   console.log(
//     `${message} ${this.firstName} ${this.lastName} you have ${num} apples`
//   );
// }

// showFullUser.call(user, "Hello", 10);
// showFullUser.apply(obj, ["Hi", 5]);//приймає через масив аргументи

//TODO:=========task-06=================
// Виправте помилки, щоб код працював

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(callback) {
//   callback();
// }

// callAction(product.showPrice.bind(product));

//! class
//TODO:=================task-01=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)

// class Order {
//   #tableNumber;
//   #items;
//   #isPaid;
//   constructor(tableNumber) {
//     this.#tableNumber = tableNumber;
//     this.#items = [];
//     this.#isPaid = false;
//   }
//   calculateTotal() {
//     const totalAmount = this.#items.reduce((acc, num) => acc + num.price, 0);
// let totalAmount = 0;
// for (const item of this.#items) {
//   totalAmount += item.price;
// }
//     return totalAmount;
//   }
//   markAsPaid() {
//     this.#isPaid = true;
//   }
//   addItem(item) {
//     this.#items.push(item);
//   }
//   removeItem(item) {
//     return this.#items.filter((elem) => item === elem);
//   }
//   set tableNumber(tableNumber) {
//     this.#tableNumber = tableNumber;
//   }
//   get tableNumber() {
//     return this.#tableNumber;
//   }
//   get isPaid() {
//     return this.#isPaid;
//   }
// }

// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

// class MenuItem {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// Create menu items
// const item1 = new MenuItem("Burger", 10);
// const item2 = new MenuItem("Fries", 5);
// const item3 = new MenuItem("Drink", 2);

// Create an order
// const order = new Order(1);
// const order1 = new Order(2);

// Add items to the order
// order.addItem(item1);
// order.addItem(item2);
// order.addItem(item3);

// Calculate the total and mark the order as paid
// const total = order.calculateTotal();
// order.markAsPaid();

// console.log(`Order for table ${order.tableNumber} - Total: $${total}`);
// console.log(`Is paid: ${order.isPaid}`);
// console.log(order);

// ---

// Add items to the order
// order1.addItem(item3);
// order1.addItem(item3);
// order1.addItem(item3);

// Calculate the total and mark the order as paid
// const total1 = order1.calculateTotal();
// order1.markAsPaid();

// console.log(`Order for table ${order1.tableNumber} - Total: $${total1}`);
// console.log(`Is paid: ${order1.isPaid}`);
// console.log(order);
