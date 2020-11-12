// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let button = document.querySelector("#button");
let text = document.querySelector("#text");
let ageInput = document.querySelector("#ageInput");
let btnAgeConfrim = document.querySelector("#btnAgeConfirm");

let menuBlock = document.querySelector("#menuDiv");
let span = document.querySelector("#menu");

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
