

//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = " abcdE ";
// function checkString(string) {
//   if (string[2] === "c") {
//     return true;
//   } else {
//     return false;
//   }
//   return string.trim().toLowerCase().endsWith("e");
// }
// console.log(checkString(string));

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 60. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту). Виведіть значення у консоль, або alert

// const min = -1;
// function minCheck(num) {
//     let  message = ""
//     if (num > 0 && num <= 15) {
//       message = "Перша частина";
//     }
//     else if (num > 15 && num <= 30) {
//         message = "Друга частина";
//     }
//     else if (num > 30 && num <= 45) {
//       message = "Третя частина";
//     }
//     else if (num > 45 && num <= 60) {
//       message = "Четверта частина";
//     }
//     else {
//          message = "Невірна частина";
//     }
//     return message;
// }
// console.log(minCheck (min)) ;

//TODO: 3 ===================================
// Напиши скрипт, який отримує мінімальне та максимальне значення від користувача через prompt. Зроби перевірку, що користувач передає саме числа, якщо користувач водить не числа виведіть в консоль 'Будь ласка, введіть числа.' Також додайте перевірку, щоб користувач не зміг ввести мінімальне число > за максимальне, якщо це сталось виведи у косоль повідомлення 'Мінімальне значення повинно бути менше максимального.'. У падку правильного ввода данних виведи у консоль рядок  "Випадкове число в діапазоні від мінімального до максимального : ("рандомне число")"

// Генерація випадкового числа

// let min = parseInt(prompt('Введіть мінімальне значення:'));
// let max = parseInt(prompt('Введіть максимальне значення:'));

// const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// function inputMinMax(){
//   min = parseInt(prompt('Введіть мінімальне значення:'));
//   max = parseInt(prompt('Введіть максимальне значення:'));
// }

// function inputRandomNumber(a, b) {
//   if(isNaN(a) || isNaN(b)){
//    alert('Будь ласка, введіть числа.');
//    return inputMinMax();}
//    if(b<a){
//     alert('Мінімальне значення повинно бути менше максимального.');
//    return inputMinMax();
//    }
//    else {
//     alert(`Випадкове число в діапазоні від мінімального до максимального : ${randomNum}`)
//    }
// }
// inputRandomNumber(min, max);

//* Тернарний оператор

//TODO: 4 ===================================
// Перевірити, чи є введене користувачем число парним чи непарним, і вивести відповідне повідомлення. Використай promt і виведи повідомлення в alert. (використати тернарний оператор)

// const number = 7;

// function checkNumber(a) {
//   return a % 2 === 0 ? true : false;
// }
// console.log(checkNumber(number));
//TODO: 5 ===================================
// Перепишіть if..else на тернарний оператор, за допомогою декількох операторів '?'.

// const login = "Директор";
// let message = "";

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// message =
//   login === "Співробітник"
//     ? "Привіт"
//     : login == "Директор"
//     ? "Вітаю"
//     : login == ""
//     ? "Немає логіну"
//     : "";

// console.log(message);

//* Цикл while and do while
//TODO: 6 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let i = 0;

// while (i <= 1000) {
//   console.log(i);
//   i += 1;
// }

//TODO: 7 ===================================
//  Дано число n = 1000.
//  Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
//  Яке число вийде?
//  Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.

// let n = 1000;
// let num = 0;

// while (n / 2 >= 50) {
//   num += 1;
//   n /= 2;
// }

// console.log(`Кількість ітерацій: ${num}. Чило після ділення: ${n}`);

//TODO: 8 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

// TODO: 9 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let number;
// do {
//   number = parseFloat(prompt("Введіть число більше 100"));
// } while (number < 100);
// alert(number);

//* Цикл for і директива continue

//TODO: 10 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 34;
// const max = 68;
// let total = 0;

// for (let index = max; index >= min; index -= 1) {
//   console.log(index);

//   if (index % 2 !== 0) {
//     continue;
//   }
//   total += index;
// }

// console.log(`Сума усіх парних: ${total}`);

//TODO: 11 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *******

// let star = "*";

// for (let index = 1; index <= 27; index += 1) {
//   console.log(star);
//   star += "*";
// }

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const num = 30;

// for (let index = 1; index <= num; index += 1) {
//   if (index % 3 === 0 && index % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (index % 3 === 0) {
//     console.log("fizz");
//   } else if (index % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(index);
//   }
// }

//* Конструкція switch
//TODO: 13 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// let num = 5;
// let result = "";

// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;

//   default:
//     result = "Такої пори року не існує";
//     break;
// }
// console.log(result);

//TODO: 14 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = "Opera";

// if (browser === "Edge") {
//   console.log("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok!");
// }

// switch (browser) {
//   case "Edge":
//     console.log("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     console.log("Okay we support these browsers too");
//     break;

//   default:
//     console.log("We hope that this page looks ok!");
// }

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

use strict;
const library = {
	books: 1923,
	logBookCount() {
		console.log(this.books);
	}
};

function showBooks(callback) {
	callback()
}

showBooks(library.logBookCount);