// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let div = document.createElement("div");
// let wrapper = document.createElement("div");
// let textarea = document.createElement("textarea");

// textarea.oninput = (ev) => {
//   localStorage.setItem("text", ev.target.value);
// };
// textarea.value = localStorage.getItem("text");

// div.appendChild(textarea);
// wrapper.appendChild(div);
// document.body.appendChild(wrapper);

//----------------------------------------------------

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let form = document.getElementById("form");
// getData(form);
// function saveForm(t) {
//   setDataTag(t);
// }

// function setDataTag(tag) {
//   for (let i = 0; i < tag.length; i++) {
//     const tagElem = tag[i];
//     if (tagElem.type === "checkbox" || tagElem.type === "radio")
//       tagElem.checked ? (tagElem.value = true) : (tagElem.value = false);
//     localStorage.setItem(tagElem.id, tagElem.value);
//   }
// }

// function getData(tag) {
//   for (let i = 0; i < localStorage.length; i++) {
//     if (localStorage.hasOwnProperty(tag.children[i].id)) {
//       tag.children[i].value = localStorage.getItem(tag.children[i].id);
//       if (tag.children[i].value === "true") {
//         tag.children[i].setAttribute("checked", "checked");
//       }
//     }
//   }
// }

//----------------------------------------------------------------------

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let div = document.createElement("div");
// let buttonSave = document.createElement("button");
// let textarea = document.createElement("textarea");
// let buttonUp = document.createElement("button");
// let buttonDown = document.createElement("button");
// buttonSave.innerHTML = "SAVE";
// buttonDown.innerHTML = "DOWN";
// buttonUp.innerHTML = "UP";
// div.style.display = "flex";
// div.style.flexDirection = "column";

// buttonSave.onclick = () => {
//   localStorage.setItem(localStorage.length + 1, textarea.value);
// };
// textarea.value = localStorage.getItem(localStorage.length);

// buttonUp.onclick = () => {
//   buttonDown.style.visibility = "visible";
//   let index;
//   for (let key in localStorage) {
//     // console.log(key);
//     if (localStorage.hasOwnProperty(key)) {
//       if (localStorage.getItem(key) === textarea.value) {
//         index = key;
//         console.log(index);
//       }
//     }
//   }
//   if (index === "1") {
//     buttonUp.style.visibility = "hidden";
//     return;
//   }
//   textarea.value = localStorage.getItem(index - 1);
// };
// buttonDown.onclick = () => {
//   buttonUp.style.visibility = "visible";
//   let index;
//   for (let key in localStorage) {
//     // console.log(key);
//     if (localStorage.hasOwnProperty(key)) {
//       if (localStorage.getItem(key) === textarea.value) {
//         index = key;
//         console.log(index);
//       }
//     }
//   }
//   if (index === localStorage.length.toString()) {
//     buttonDown.style.visibility = "hidden";
//     return;
//   }
//   textarea.value = localStorage.getItem(+index + 1);
// };

// div.appendChild(buttonUp);
// div.appendChild(textarea);
// div.appendChild(buttonDown);
// div.appendChild(buttonSave);
// document.body.appendChild(div);

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// let content = document.getElementById("content");
// let inputDiv = document.getElementById("inputs");
// let inputs = document.getElementsByClassName("textinput");
// let nameInput = document.getElementById("nameInput");
// let surnameInput = document.getElementById("surnameInput");
// let phoneInput = document.getElementById("phoneInput");
// let emailInput = document.getElementById("emailInput");

// let buttonSave = document.getElementById("saveUser");
// let buttonDelete = document.getElementById("deleteUser");
// let buttonEdit = document.getElementById("editInfo");

// let blockName = document.createElement("div");
// let blockSurname = document.createElement("div");
// let blockPhone = document.createElement("div");
// let blockEmail = document.createElement("div");

// buttonSave.onclick = () => {
//   for (let input of inputs) {
//     if (input.id === "nameInput") {
//       localStorage.setItem("name", input.value);
//     } else if (input.id === "surnameInput") {
//       localStorage.setItem("surname", input.value);
//     } else if (input.id === "phoneInput") {
//       localStorage.setItem("phoneNumber", input.value);
//     } else if (input.id === "emailInput") {
//       localStorage.setItem("Email", input.value);
//     }
//   }
//   for (let key in localStorage) {
//     if (key === "name") {
//       blockName.innerHTML = `User name is ${localStorage.getItem(key)}`;
//     } else if (key === "surname") {
//       blockSurname.innerHTML = `User surname is ${localStorage.getItem(key)}`;
//     } else if (key === "phoneNumber") {
//       blockPhone.innerHTML = `User phone number is is ${localStorage.getItem(
//         key
//       )}`;
//     } else if (key === "Email") {
//       blockEmail.innerHTML = `User email is ${localStorage.getItem(key)}`;
//     }
//   }
// };
// buttonDelete.onclick = () => {
//   localStorage.clear();
//   window.location.reload();
// };

// buttonEdit.onclick = () => {
//   if (nameInput.value == "") {
//     localStorage.getItem("name");
//   } else if (nameInput.value !== localStorage.getItem("name")) {
//     localStorage.setItem("name", nameInput.value);
//   }
//   if (surnameInput.value == "") {
//     localStorage.getItem("surname");
//   } else if (surnameInput.value !== localStorage.getItem("surname")) {
//     localStorage.setItem("surname", surnameInput.value);
//   }
//   if (phoneInput.value == "") {
//     localStorage.getItem("phoneNumber");
//   } else if (phoneInput.value !== localStorage.getItem("phoneNumber")) {
//     localStorage.setItem("phoneNumber", phoneInput.value);
//   }
//   if (emailInput.value == "") {
//     localStorage.getItem("Email");
//   } else if (emailInput.value !== localStorage.getItem("Email")) {
//     localStorage.setItem("Email", emailInput.value);
//   }

//   window.location.reload();
// };

// blockName.innerHTML = localStorage.getItem("name");
// blockSurname.innerHTML = localStorage.getItem("surname");
// blockPhone.innerHTML = localStorage.getItem("phoneNumber");
// blockEmail.innerHTML = localStorage.getItem("Email");
// content.appendChild(blockName);
// content.appendChild(blockSurname);
// content.appendChild(blockPhone);
// content.appendChild(blockEmail);
