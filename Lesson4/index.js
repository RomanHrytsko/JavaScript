//TASK 1  - створити функцію яка виводить масив

// let myNumbers = [1, 2, 3, 4, 5, 6];

// function array(arr) {
//   console.log(arr);
// }

// array(myNumbers);
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function randomNumbers(count) {
//   let emptyArr = [];

//   for (let i = 0; i < count; i++) {
//     emptyArr.push(getRandomInt(100));
//   }

//   return emptyArr;
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(randomNumbers(15));

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function lessNumb(one, two, three) {
//   console.log(Math.min(one, two, three));
// }

// lessNumb(10, 8, 67);
// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function lessNumb(one, two, three) {
//   console.log(Math.max(one, two, three));
// }

// lessNumb(10, 8, 67);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function number(count) {
//   const array = randomNumbers(count);
//   console.log(array);

//   let min = array[0];
//   let max = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//       min = array[i];
//     }

//     if (max < array[i]) {
//       max = array[i];
//     }
//   }

//   console.log(max);

//   return min;
// }

// console.log(number(10));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let arrNumbers = [1, 2, 3, 4, 5, 6];
// let arrString = ["a", "b", "c", "d"];
// function plus(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   console.log(result);
//   return result;
// }

// plus(arrString);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function aref(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const result = sum / arr.length;
//   console.log(result);
//   return result;
// }

// aref(arrNumbers);
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві ????

// let arrOBJ = [
//   { name: "Roman", age: "22", car: "Opel" },
//   { name: "Andriy", student: "school" },
//   { name: "Andriy", student: "school" },
//   { name: "Andriy", student: "school" },
//   { name: "Andriy", student: "school" },
//   { name: "Andriy", student: "school" },
//   { name: "Andriy", student: "school" },
//   { name: "Andriy", student: "school" },
//   { name: "Andriy", student: "school" },
//   1,
//   2,
//   3,
// ];
// let i = 0;
// function objcheck(arr) {
//   for (elem of arr) {
//     if (typeof elem == "object") {
//       i++;
//     }
//   }
//   console.log(i);
// }

// objcheck(arrOBJ);

// function countObjects(arr) {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "object") {
//       counter++;
//     }
//     // console.log(counter);

//     // for (let object of arr) {
//     //   if (typeof object == "object") {
//     //     let i = 0;
//     //     i++;
//     //     console.log(i++);
//     //   }
//     // }
//   }
//   console.log(counter);
// }
// countObjects(arrOBJ);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function rowCount(arr) {
//   let count = 0;
//   for (let element of arr) {
//     for (let objRow in element) {
//       count++;
//       // console.log(objRow);
//     }
//   }
//   console.log(count);
// }

// rowCount(arrOBJ);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.  Приклад
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// let arrResult = [];

// function addArr(arrOne, arrTwo, arrpush) {
//   for (let arr1Index of arrOne) {
//     for (let arr2Index of arrTwo) {
//       if (arrOne.indexOf(arr1Index) == arrTwo.indexOf(arr2Index)) {
//         let result = arr1Index + arr2Index;
//         arrpush.push(result);
//       }
//     }
//   }
//   console.log(arrpush);
// }
// addArr(arr1, arr2, arrResult);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function bodyText(text, tag) {
//   let textBlock = document.createElement(tag);
//   textBlock.innerHTML = text;
//   document.body.appendChild(textBlock);
// }
// bodyText("Hello Owu");

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// bodyText("Hello Owu", "h1")

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let carsArr = ["Opel", "Mazda", "Mitssubisi", "Lada", "BMW"];

// function carsIndetificator(arr, tag) {
//   for (let car of arr) {
//     let block = document.createElement(tag);
//     block.innerHTML = car;
//     document.body.appendChild(block);
//   }
// }
// carsIndetificator(carsArr, "h2");

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let cars = [
//   {
//     model: "Toyota",
//     year: 2000,
//     hoursePower: 200,
//     color: "red",
//   },
//   {
//     model: "Ferrari",
//     year: 2011,
//     hoursePower: 1200,
//     color: "red",
//   },
//   {
//     model: "Lada",
//     year: 1980,
//     hoursePower: 1400,
//     color: "white",
//   },
//   {
//     model: "Opel",
//     year: 2013,
//     hoursePower: 164,
//     color: "black",
//   },
//   {
//     model: "Reno",
//     year: 2004,
//     hoursePower: 120,
//     color: "blue",
//   },
//   {
//     model: "Lanos",
//     year: 2003,
//     hoursePower: 110,
//     color: "grey",
//   },
//   {
//     model: "Bentley",
//     year: 2019,
//     hoursePower: 600,
//     color: "black-white",
//   },
//   {
//     model: "Mercesed",
//     year: 2020,
//     hoursePower: 1200,
//     color: "grey",
//   },
//   {
//     model: "BMW",
//     year: 2013,
//     hoursePower: 300,
//     color: "black",
//   },
//   {
//     model: "Audi",
//     year: 2000,
//     hoursePower: 220,
//     color: "yellow",
//   },
// ];

// function carsIndetificator(arr, blockTag, carBlockTag) {
//   for (let car of arr) {
//     let carBlock = document.createElement(carBlockTag);
//     let block = document.createElement(blockTag);
//     block.innerHTML = carBlock.innerHTML;
//     block.style.border = "1px solid black";
//     block.style.margin = "5px";
//     block.style.padding = "5px";
//     for (let carOptions in car) {

//       carBlock.innerHTML += carOptions + ": " + car[carOptions] + "<br>";
//     }
//     document.body.appendChild(block);
//     block.appendChild(carBlock);
//   }
// }
// carsIndetificator(cars, "div", "div");

// Для кожної властивості створити всередені блока автомоблія свій блок

// function carsIndetificator(arr, blockTag, carBlockTag) {
//   for (let car of arr) {
//     let optinBlock = document.createElement(carBlockTag);
//     let carBlock = document.createElement(carBlockTag);
//     let block = document.createElement(blockTag);
//     block.innerHTML += carBlock.innerHTML;
//     carBlock.innerHTML += optinBlock.innerHTML;
//     block.style.border = "1px solid black";
//     block.style.margin = "5px";
//     block.style.padding = "5px";
//     optinBlock.style.border = "1px solid red";
//     carBlock.style.border = "1px solid green";
//     for (let carOptions in car) {
//       optinBlock.innerHTML += carOptions + ": " + car[carOptions] + "<br>";
//       carBlock.appendChild(optinBlock);
//     }

//     document.body.appendChild(block);
//     block.appendChild(carBlock);
//   }
// }
// carsIndetificator(cars, "div", "div");

// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:

// let newarr = [];
// let usersWithId = [
//   { id: 1, name: "vasya", age: 31, status: false },
//   { id: 2, name: "petya", age: 30, status: true },
//   { id: 3, name: "kolya", age: 29, status: true },
//   { id: 4, name: "olya", age: 28, status: false },
// ];
// let citiesWithId = [
//   { user_id: 3, country: "USA", city: "Portland" },
//   { user_id: 1, country: "Ukraine", city: "Ternopil" },
//   { user_id: 2, country: "Poland", city: "Krakow" },
//   { user_id: 4, country: "USA", city: "Miami" },
// ];

// function userId(man, location) {
//   for (let user of man) {
//     for (let city of location) {
//       if (user.id === city.user_id) {
//         user.address = city;
//       }
//     }
//   }
//   console.log(man);
// }

// userId(usersWithId, citiesWithId);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
//   {
//     title: "Первое правило Бойцовского клуба.",
//     body: "Никому не рассказывать о Бойцовском клубе.",
//   },
//   {
//     title: "Второе правило Бойцовского клуба.",
//     body: "Никогда никому не рассказывать о Бойцовском клубе.",
//   },
//   {
//     title: "Третье правило Бойцовского клуба.",
//     body: "В схватке участвуют только двое.",
//   },
//   {
//     title: "Четвертое правило Бойцовского клуба.",
//     body: "Не более одного поединка за один раз.",
//   },
//   {
//     title: "Пятое правило Бойцовского клуба.",
//     body: "Бойцы сражаются без обуви и голые по пояс.",
//   },
//   {
//     title: "Шестое правило Бойцовского клуба.",
//     body: "Поединок продолжается столько, сколько потребуется.",
//   },
//   {
//     title: "Седьмое правило Бойцовского клуба.",
//     body:
//       "Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.",
//   },
//   {
//     title: "Восьмое и последнее правило Бойцовского клуба.",
//     body: "Новичок обязан принять бой.",
//   },
// ];
// let i = 1;
// function fightRules(arr, divBlock) {
//   for (let element of arr) {
//     let ruleBlock = document.createElement(divBlock);
//     let numberBlock = document.createElement(divBlock);
//     numberBlock.innerHTML = Number(i++);

//     for (let text in element) {
//       ruleBlock.innerHTML += element[text] + "<br>";
//       // console.log(element[text]);
//     }

//     ruleBlock.style.border = "1px solid black";
//     ruleBlock.style.margin = "5px";
//     ruleBlock.style.padding = "10px";
//     document.body.appendChild(ruleBlock);
//     ruleBlock.prepend(numberBlock);
//   }
// }

// fightRules(rules, "div");
