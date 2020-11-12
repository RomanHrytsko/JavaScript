// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let button = document.querySelector("#button");
let text = document.querySelector("#text");
let ageInput = document.querySelector("#ageInput");
let btnAgeConfrim = document.querySelector("#btnAgeConfirm");

let menuBlock = document.querySelector("#menuDiv");
let span = document.querySelector("#menu");
let showHide = document.querySelector("#showHide");

// button.onclick = () => {
//   text.style.display = "none";
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// button.onclick = () => {
//   button.style.display = "none";
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// btnAgeConfrim.onclick = () => {
//   if (ageInput.value >= 18) {
//     alert("Hello");
//   } else {
//     alert("Sorry, bye");
//   }
// };

// - Создайте меню, которое раскрывается/сворачивается при клике

// let status = true;
// showHide.onclick = () => {
//   if (status) {
//     span.style.display = "none";
//     status = false;
//   } else {
//     span.style.display = "block";
//     status = true;
//   }
// }; почитати за transform

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comment = {
//   title: "lorem",
//   body: "psum dolo sit ameti",
//   footer: "sit ameti",
//   header: "ipsum dolo",
// };

let wrapperDiv = document.createElement("div");

// for (let elem in comment) {
//   let blockLine = document.createElement("div");
//   const btn = document.createElement("button");
//   btn.innerHTML = "Hide";
//   btn.onclick = () => {
//     blockLine.style.display = "none";
//   };

//   blockLine.innerHTML += comment[elem];
//   blockLine.appendChild(btn);
//   wrapperDiv.appendChild(blockLine);
// }

// document.body.appendChild(wrapperDiv);

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement("input");
// let form2 = document.createElement("input");
// let btn = document.createElement("button");
// let finalBlock = document.createElement("div");
// let arr = [form1, form2, btn];

// btn.innerHTML = "CLICK ON ME";

// for (elem of arr) {
//   wrapperDiv.appendChild(elem);
// }

// btn.onclick = () => {
//   finalBlock.innerHTML += form1.value + form2.value;
//   wrapperDiv.appendChild(finalBlock);
// };

// document.body.appendChild(wrapperDiv);

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

button = (rows, blocks, table) => {
  let bigBlock = document.createElement("table");
  let rowBlock = document.createElement("tr");
  let columnBlock = document.createElement("div");
  rowBlock.style.height = "50px";
  rowBlock.style.width = "50px";
  rowBlock.style.border = "1px solid black";
  for (let i = 0; i < rows; i++) {}
  document.body.appendChild(rowBlock);
};
