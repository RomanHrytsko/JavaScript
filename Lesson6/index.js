// -- при помощи метода sort и колбека  отсортировать массив.
// let arr = [
//   1,
//   33,
//   20,
//   10,
//   3,
//   4,
//   5,
//   612,
//   14,
//   25,
//   30,
//   28,
//   45,
//   40,
//   50,
//   54,
//   443,
//   75,
//   80,
//   90,
//   92,
// ];

// let sort = arr.sort((a, b) => {
//   return b - a;
// });
// console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sortReverse = arr.sort((a, b) => {
//   return b - a;
// });
// console.log(sortReverse);

// при помощи filter получить числа кратные 3

// let filter = arr.filter((number) => {
//   if (number % 3 === 0) {
//     return true;
//   }
// });

// console.log(filter);

// при помощи filter получить числа кратные 10

// let filter10 = arr.filter((number) => {
//   if (number % 10 === 0) {
//     return true;
//   }
// });
// console.log(filter10);

//-- перебрать (проитерировать) массив при помощи foreach()

// let forEach = arr.forEach((number) => {
//   console.log(number);
// });

// перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let map = arr.map((number) => {
//   return number * 3;
// });
// console.log(map);

//
// создать массив со словами на 15-20 элементов.

// let names = [
//   "Roman",
//   "Igor",
//   "Lesia",
//   "Vitalik",
//   "Ania",
//   "Ira",
//   "Vika",
//   "Stepan",
//   "Igor",
//   "Oleksandr",
//   "Orest",
//   "Katia",
//   "Tomas",
//   "Rika",
//   "Tania",
//   "Karina",
//   "Lida",
//   "Nika",
//   "Emma",
//   "Yura",
//   "Andriy",
// ];

// -- отсортировать его по алфавиту в восходящем порядке.

// let sortNames = names.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   return -1;
// });
// console.log(sortNames);

//-- отсортировать его по алфавиту  в нисходящем порядке.

// let sortNames = names.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   return 1;
// });
// console.log(sortNames);

//-- отфильтровать слова длиной менее 4х символов

// let filterNames = names.filter((name) => name.length >= 4);

// console.log(filterNames);

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let mapNames = names.map((name) => name + "!");
// console.log(mapNames);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let ageSortToMax = users.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(ageSortToMax);

// let ageSortToMin = users.sort((a, b) => {
//   return b.age - a.age;
// });
// console.log(ageSortToMin);

//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let nameLenghtSortToMax = users.sort((a, b) => {
//   return a.name.length - b.name.length;
// });

// console.log(nameLenghtSortToMax);
// let nameLenghtSortToMin = users.sort((a, b) => {
//   return b.name.length - a.name.length;
// });
// console.log(nameLenghtSortToMin);

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let newUsers = JSON.stringify(users);
// let parsedUsers = JSON.parse(newUsers);

// parsedUsers.map((user, index) => {
//   user.id = index;
// });

// //- відсортувати його за індентифікатором
// parsedUsers.sort((a, b) => {
//   return b.id - a.id;
// });
// console.log(parsedUsers);
