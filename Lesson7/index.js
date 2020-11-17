// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let button = document.querySelector("#button");
// let text = document.querySelector("#text");
// let ageInput = document.querySelector("#ageInput");
// let btnAgeConfrim = document.querySelector("#btnAgeConfirm");

// let menuBlock = document.querySelector("#menuDiv");
// let span = document.querySelector("#menu");
// let showHide = document.querySelector("#showHide");

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

// let wrapperDiv = document.createElement("div");

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

// function myTable(rowsInTable, blocksInRow, div) {
//   //table > tr(rows) > td(blocks)

//   let table = document.createElement("table");

//   let divBlock = document.createElement(div);

//   document.body.appendChild(divBlock);
// //   divBlock.appendChild(table);
// //   for (let i = 0; i <= rowsInTable; i++) {
// //     let row = document.createElement("tr");
// //     table.appendChild(row);

// //     for (let j = 1; j <= blocksInRow; j++) {
// //       let block = document.createElement("td");
// //       block.style.border = "1px solid black";
// //       block.innerHTML = `block number ${j}`;
// //       row.appendChild(block);
// //     }
// //   }
// //   table.style.border = "1px solid black";
// // }
// // myTable(5, 3, "div");

// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)

// //ELEMS
// let input1 = document.createElement("input");
// let input2 = document.createElement("input");
// let input3 = document.createElement("input");
// let button = document.createElement("button");
// input1.setAttribute("placeholder", "amount of rows");
// input2.setAttribute("placeholder", "amount of blocks");
// input3.setAttribute("placeholder", "value");
// let divBlock = document.createElement("div");
// let table = document.createElement("table");

// //VALUE
// button.innerHTML = "Create a Table";

// let inputsArr = [input1, input2, input3, button];
// document.body.appendChild(divBlock);
// divBlock.appendChild(table);

// for (let elem of inputsArr) {
//   divBlock.appendChild(elem);
// }
// //STYLES
// table.style.border = " 1px solid black";
// //FUNCTION
// button.onclick = () => {
//   for (let i = 0; i < Number(input1.value); i++) {
//     let tableRows = document.createElement("tr");
//     table.appendChild(tableRows);
//     for (let j = 0; j < Number(input2.value); j++) {
//       let tableBlocks = document.createElement("td");
//       tableBlocks.innerHTML = input3.value;
//       tableRows.appendChild(tableBlocks);
//       //STYLES
//       tableBlocks.style.border = " 1px solid black";
//     }
//   }
// };

// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// //BUTTONS
// let leftBtn = document.createElement("button");
// leftBtn.innerHTML = "←";
// let rightBtn = document.createElement("button");
// rightBtn.innerHTML = "→";
// //IMAGES & DIV BLOCK
// let img1 = document.createElement("img");
// img1.setAttribute("src", "https://l-userpic.livejournal.com/81589670/11899723");
// let img2 = document.createElement("img");
// img2.setAttribute(
//   "src",
//   "https://img0.liveinternet.ru/images/attach/b/0/15070/15070703_53d091471f48.gif"
// );
// let img3 = document.createElement("img");
// img3.setAttribute("src", "https://img.icons8.com/ios/2x/super-mario.png");
// let imageBlock = document.createElement("div");
// let divBlock = document.createElement("div");

// let imgArr = [img1, img2, img3];

// //LOCATION
// document.body.appendChild(divBlock);
// divBlock.appendChild(leftBtn);
// divBlock.appendChild(imageBlock);
// divBlock.appendChild(rightBtn);
// //STYLES

// divBlock.style.display = "flex";

// //FUCNTION
// for (let image of imgArr) {
//   imageBlock.appendChild(image);
// }

// let index = 0;
// const activeSlide = (n) => {
//   for (let img of imgArr) {
//     img.style.display = "none";
//   }
//   imgArr[n].style.display = "block";
// };

// activeSlide(0);

// const nextSlide = () => {
//   if (index == imgArr.length - 1) {
//     index = 0;
//     activeSlide(index);
//   } else {
//     index++;
//     activeSlide(index);
//   }
// };
// const prevSlide = () => {
//   if (index == 0) {
//     index = imgArr.length - 1;
//     activeSlide(index);
//   } else {
//     index--;
//     activeSlide(index);
//   }
// };

// rightBtn.addEventListener("click", nextSlide);
// leftBtn.addEventListener("click", prevSlide);

// divBlock.appendChild(rightBtn);

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// const badWords = ["bliat", "bliat2", "bliat3"];

// let badWordsButton = document.createElement("button");
// let badWordsInput = document.createElement("input");
// badWordsButton.innerHTML = "Check words";
// badWordsButton.onclick = () => {
//   const foundWords = findBadWords(badWordsInput.value, badWords);
//   alert(foundWords);
// };

// const findBadWords = (string, badWords) => {
//   const foundWords = [];
//   badWords.forEach((word) => {
//     if (string.includes(word)) {
//       foundWords.push(word);
//     }
//   });

//   return foundWords;
// };

// document.body.appendChild(badWordsButton);
// document.body.appendChild(badWordsInput);

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let h2Tags = document.getElementsByTagName("h2");
// const wrapper = document.createElement("div");
// let divv = document.getElementById("content");
// const table = document.createElement("table");

// console.log(h2Tags);

// for (let i = 0; i < h2Tags.length; i++) {
//   const td = document.createElement("td");
//   const tr = document.createElement("tr");
//   let link = document.createElement("a");
//   link.setAttribute("href", `#${h2Tags[i].id}`);
//   link.innerHTML = h2Tags[i].innerText;

//   td.appendChild(link);
//   tr.appendChild(td);
//   wrapper.appendChild(tr);
//   wrapper.style.display = "flex";
//   wrapper.style.flexDirection = "column";

// }

document.body.prepend(wrapper);
