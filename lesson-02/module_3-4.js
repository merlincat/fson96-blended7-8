// ! Масиви
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");

// console.log(styles);
// const index = styles.indexOf("Блюз");
// styles[index] = "Класика";
// // styles[1] = "Класика";
// console.log(styles.shift());
// console.log(styles);
// styles.unshift("Реп", "Реггі");
// console.log(styles);

// const newArray = [1, 2];
// const concatArray = styles.concat(newArray);
// console.log(concatArray);

//TODO:=========task-02=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
// const array = ['JavaScript', 'HTML', 'CSS', 'SS'];

// function a(array) {
//     const elem = 'SSq';
//     const index = array.indexOf(elem);
//     index === -1 ? array.push(elem) : array.splice(index, 1);
//     return array;
// }

// console.log(a(array));

//TODO:=========task-03=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

//     function findSmallerNumber(array) {
//         if (!Array.isArray(array)) {
//             return "It's not array"
//         }
//         let min = array[0];
//         for (const number of array) {
//             if (number < min) {
//                 min = number;
//             }
//         }
//         return min;
//     }
//  const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// console.log(findSmallerNumber(numbers)); // 2

//TODO:============task-04==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") return "ВВедіть число";
//   return Math.min(a, b);
// }

// console.log(min(9, 5)); // 5

//TODO:=============task-05=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumAdjacentNumbers(someArr) {
//   const newArray = [];
//   for (let i = 0; i < someArr.length - 1; i += 1) {
//     newArray.push(someArr[i] + someArr[i + 1]);
//   }
//   return newArray;
// }

// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:=========task-06=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// console.log(calculateAverage(10, 10, 20, 200));

//TODO:=============task-07=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку. `Містить ${count} голосних`

//  const str = "This is a new line";

//  function countVowels(string) {
//      const vowels = ["a", "e", "i", "o", "u"];
//      let count = 0;
//      for (const leter of string) {
//          count += vowels.includes(leter) ? 1 : 0;

//      }
//      return `Містить ${count} голосних`;
//   }
//  console.log(countVowels(str));

//!  Літерал об'єкта
//!  Властвості та методи об'єкта

//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const human = {
//     name: "Oleh",
//     hobby: "sky",
//     age: 18,
//     greet() {
//         return `Hello ${this.name}`;
//     }
// }

// const key = "mood";

// human[key] = "happy";
// human.hobby = "skydiving";

// console.log(human);
// const user = Object.create(human);
// user.name = "Dima";

// console.log(user.greet());
//TODO:============task-2==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.

// const square = {
//     hight: 15,
//     width: 30,
//     calculateArea() {
//         return this.hight * this.width;
//     }
// }

// console.log(square.calculateArea());

// console.log(square.calculateArea());

//TODO:============task-3==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// const store = {
//   products: ["apple", "tomato", "banana"],
//   hasProduct(product) {
//     return this.products.includes(product);
//   },
// };
// console.log(store.hasProduct("apple"));

//TODO:============task-4==============================================
//4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

//     const cart = {
//         products: ["apple", "tomato", "banana"],
//         price: [10, 30, 40],

//         calculateTotal () {
//             let sum = 0;
//             for (const number of this.price) {
//                 sum += number;

//             }
//             return sum;
//         }
//     }
// console.log('object :>> ', cart.calculateTotal());

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-5======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function getBool(obj, key) {
//   const keys = Object.keys(obj); //[]
//   return keys.includes(key);
// }

// function getBool(obj, key) {
//   return key in obj; //тільки на об'єкт
// }
// console.log(getBool(obj, "car")); // true

//TODO:============task-6======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// const valuesArray = Object.values(salaries); //[]
// for (const number of valuesArray) {
//   sum += number;
// }

// console.log(sum);
//

//TODO:============task-7======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

//  const user = {
//    name: 'John',
//   surName: 'Stones',
//   age: 20,
//    hobby: 'tenis',
//    haveCar: true,
//    merried: false,
//  };
// function changeObject(user) {
//     return Object.entries(user)

//    }
//   console.log(changeObject(user));

//TODO:============task-8======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] !== "number") {
//       continue;
//     }

//     obj[key] *= 2;
//   }
//   return obj;
// }
// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//! Робота з масивом об'єктів
//TODO:============task-9==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: "Андрій", surname: "Іванов", grade: 4.5 },
//   { name: "Олександр", surname: "Петров", grade: 3.9 },
//   { name: "Марія", surname: "Сидорова", grade: 4 },
//   { name: "Ірина", surname: "Федорова", grade: 4.8 },
// ];
// function findTopStudent(students, value) {
//   let topStudentArray = [];
//   for (const student of students) {
//     if (student.grade >= value) {
//       topStudentArray.push(student);
//     }
//   }
//   return topStudentArray;
// }
// console.log(findTopStudent(students, 4));

//TODO:============task-10==================================================
// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.

// const books = [
//   { title: 'Війна і мир', author: 'Лев Толстой', year: 1869 },
//   {
//     title: 'Преступление и наказание',
//     author: 'Федор Достоевский',
//     year: 1866,
//   },
//   {
//     title: 'Гаррі Поттер і філософський камінь',
//     author: 'Джоан Роулінг',
//     year: 1997,
//   },
//   { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967 },
//   { title: '1984', author: 'Джордж Оруелл', year: 1949 },
// ];

// const arr = findBooksByAuthor(books, 'Джоан Роулінг');
// console.log(arr);
