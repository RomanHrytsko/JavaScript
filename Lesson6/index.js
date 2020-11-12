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
// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 30, status: true },
//   { name: "kolya", age: 29, status: true },
//   { name: "olya", age: 28, status: false },
//   { name: "max", age: 30, status: true },
//   { name: "anya", age: 31, status: false },
//   { name: "oleg", age: 28, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 30, status: true },
//   { name: "olya", age: 31, status: false },
//   { name: "max", age: 31, status: true },
// ];
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

///CLASS WORK///

// let cars = [
//   {
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400,
//   },
//   {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250,
//   },
//   {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300,
//   },
//   {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140,
//   },
//   {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200,
//   },
//   {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165,
//   },
//   {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350,
//   },
//   {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400,
//   },
//   {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230,
//   },
// ];
// - двигун більше 3х літрів

// let cheackEngine = cars.filter((number) => {
//   if (number.volume > 3) {
//     console.log(number);
//   }
// });
// - двигун = 2л

// let cheackEngine = cars.filter((number) => {
//   if (number.volume == 2) {
//     console.log(number);
//   }
// });

// - виробник мерс

// let cheackEngine = cars.filter((number) => {
//   if (number.producer == "mercedes") {
//     console.log(number);
//   }
// });
// - двигун більше 3х літрів + виробник мерседес

// let cheackEngine = cars.filter((number) => {
//   if (number.producer == "mercedes" && number.volume >= 3) {
//     console.log(number);
//   }
// });
// - двигун більше 3х літрів + виробник субару

// let cheackEngine = cars.filter((number) => {
//   if (number.producer == "subaru" && number.volume >= 3) {
//     console.log(number);
//   }
// });

// - сили більше ніж 300

// let cheackEngine = cars.filter((number) => {
//   if (number.power > 300) {
//     console.log(number);
//   }
// });

// - сили більше ніж 300 + виробник субару

// let cheackEngine = cars.filter((number) => {
//   if (number.power > 300 && number.producer == "subaru") {
//     console.log(number);
//   }
// });

// - мотор серіі ej

// let cheackEngine = cars.filter((car, index) => {
//   if (car.engine.includes("ej")) {
//     console.log(car);
//   }
// });
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let cheackEngine = cars.filter((car) => {
//   if (
//     car.engine.includes("ej") &&
//     car.power >= 300 &&
//     car.producer == "subaru"
//   ) {
//     console.log(car);
//   }
// });

// - двигун меньше 3х літрів + виробник мерседес

// let cheackEngine = cars.filter((car) => {
//   if (car.volume < 3 && car.producer == "mercedes") {
//     console.log(car);
//   }
// });
// - двигун більше 2л + сили більше 250

// let cheackEngine = cars.filter((car) => {
//   if (car.volume > 2 && car.power > 250) {
//     console.log(car);
//   }
// });
// - сили більше 250  + виробник бмв

// let cheackEngine = cars.filter((car) => {
//   if (car.producer == "bmw" && car.power > 250) {
//     console.log(car);
//   }
// });
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Anronovicha", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
// -- отсортировать его по id пользователей

// let sortUsers = usersWithAddress.sort((a, b) => {
//   return a.id - b.id;
// });
// console.log(sortUsers);

// -- отсортировать его по id пользователей в обратном опрядке

// let sortUsers = usersWithAddress.sort((a, b) => {
//   return b.id - a.id;
// });
// console.log(sortUsers);

// -- отсортировать его по возрасту пользователей

// let sortUsers = usersWithAddress.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(sortUsers);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sortUsers = usersWithAddress.sort((a, b) => {
//   return b.age - a.age;
// });
// console.log(sortUsers);
// -- отсортировать его по имени пользователей

// let sortUsers = usersWithAddress.sort((a, b) => {
//   if (a.name > b.name) {
//     return 1;
//   }
//   return -1;
// });
// console.log(sortUsers);

// -- отсортировать его по имени пользователей в обратном порядке

// let sortUsers = usersWithAddress.sort((a, b) => {
//   if (a.name > b.name) {
//     return -1;
//   }
//   return 1;
// });
// console.log(sortUsers);

// -- отсортировать его по названию улицы  в алфавитном порядке

// let sortUsers = usersWithAddress.sort((a, b) => {
//   if (a.address.street > b.address.street) {
//     return 1;
//   }
//   return -1;
// });
// console.log(sortUsers);

// -- отсортировать его по номеру дома по возрастанию

// let sortUsers = usersWithAddress.sort((a, b) => {
//   return a.address.number - b.address.number;
// });
// console.log(sortUsers);

// -- отфильтровать (оставить) тех кто младше 30

// let filterUsers = usersWithAddress.filter((number) => {
//   if (number.age < 30) {
//     console.log(number);
//   }
// });

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filterUsers = usersWithAddress.filter((number) => {
//   if (number.status === false) {
//     console.log(number);
//   }
// });

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filterUsers = usersWithAddress.filter((number) => {
//   if (number.status === false && number.age < 30) {
//     console.log(number);
//   }
// });

// -- отфильтровать (оставить) тех у кого номер дома четный

// let filterUsers = usersWithAddress.filter((number) => {
//   if (number.address.number % 2 == 0) {
//     console.log(number);
//   }
// });
