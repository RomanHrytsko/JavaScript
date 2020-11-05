// // Exercise 1 - створити масив та вивести його в консоль:
// let arrNumber = [1, 2, 3, 4, 5];
// let arrString = ["one", "two", "three", "four", "five"];
// let arrMixed = [1, "two", true, false, "three"];

// console.log(arrNumber);
// console.log(arrString);
// console.log(arrMixed);

// //Eercise 2  - Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];

// arr[0] = "first";
// arr[1] = "second";
// arr[2] = 3;

// console.log(arr);

// //Exrcise 3 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 1; i <= 10; i++) {
//   document.write(`<div class = block>block ${i}</div>`);
// }
// //Exrcise 4 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 1; i <= 10; i++) {
//   document.write(`<div class = index>index number [${i}]</div>`);
// }

// //Exercise 5 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 1;

// while (i <= 20) {
//   document.write(`<h1>Text ${i}</h1>`);
//   i++;
// }

// //Exercise 6 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 1;
// while (i <= 20) {
//   document.write(`<h1>Text  + index [${i}]</h1>`);
//   i++;
// }

// //Exercise 7 -  Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrTenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arrTenNumbers.length; i++) {
//   console.log(arrTenNumbers[i]);
// }
// //Exercise 8 -  Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrTenStings = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
// ];
// for (let i = 0; i < arrTenStings.length; i++) {
//   console.log(arrTenStings[i]);
// }

// //Exrcise 9 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrTenMixed = [
//   1,
//   null,
//   "three",
//   false,
//   "five",
//   undefined,
//   { object: "object" },
//   8,
//   9,
//   true,
// ];
// for (let i = 0; i < arrTenMixed.length; i++) {
//   console.log(arrTenMixed[i]);
// }

// //Ecxercise 10 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrBooleanCheck = [
//   true,
//   "two",
//   false,
//   "four",
//   false,
//   "six",
//   true,
//   8,
//   9,
//   true,
// ];
// for (let i = 0; i < arrBooleanCheck.length; i++) {
//   if (typeof arrNumberCheck[i] == "boolean") {
//     console.log(arrBooleanCheck[i]);
//   }
// }

// //Exercise 11 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrNumberCheck = [true, 2, false, "four", false, 6, true, 8, 9, true];

// for (let i = 0; i < arrNumberCheck.length; i++) {
//   if (typeof arrNumberCheck[i] == "number") {
//     console.log(arrNumberCheck[i]);
//   }
// }

// //Exercise 12 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrStringCheck = [true, 2, false, "four", "five", 6, true, 8, 9, true];

// for (let i = 0; i < arrStringCheck.length; i++) {
//   if (typeof arrStringCheck[i] == "string") {
//     console.log(arrStringCheck[i]);
//   }
// }

// //Exercise 13 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrEmpty = [];

// arrEmpty[1] = true;
// arrEmpty[2] = false;
// arrEmpty[3] = "string";
// arrEmpty[4] = { age: 22 };
// arrEmpty[5] = 10023;
// arrEmpty[6] = null;
// arrEmpty[7] = undefined;
// arrEmpty[8] = "Roman";
// arrEmpty[9] = 22222;
// arrEmpty[10] = false;

// for (let i = 0; i < arrEmpty.length; i++) {
//   console.log(arrEmpty[i]);
// }

// //Exercise 14 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   document.write(i + "<br>");
// }
// //Exercise 15 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   document.write(i + "<br>");
// }

// //Exercise 16 - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
//   document.write(i + "<br>");
// }

// //Exercise 17 - - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     document.write(i);
//     console.log(i);
//   }
// }

// //Exercise 18 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 1) {
//     document.write(i);
//     console.log(i);
//   }
// }

// //Exercise 19 - - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// let secs = 1;
// let mins = 0;
// while (secs <= 60) {
//   if (secs == 60) {
//     mins++;
//     secs = 0;
//   } else if (mins == 2) {
//     break;
//   }
//   console.log(`passed minutes ${mins} passed seconds: ${secs}`);
//   secs++;
// }
// //Exercise 20 - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (var secs = 0; secs < 120; secs++) {}
// for (var min = 0; min < 2; min++) {}
// document.write(`passed ${min} minutes or ${secs} seconds`);

// ///// ДОДАТКОВО //////////

// //Exercise 1 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arrABC = ["a", "b", "c"];
// let string = "";
// for (let i = 0; i < arrABC.length; i++) {
//   string += arrABC[i];
// }
// console.log(string);
// //Exercise 2  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let string = "";
// let i = 0;
// while (i < arrABC.length) {
//   string += arrABC[i];
//   i++;
// }
// console.log(string);

// //Exercise 3  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let string = "";

// for (word of arrABC) {
//   string += word;
// }
// console.log(string);
