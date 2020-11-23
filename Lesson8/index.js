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

let div = document.createElement("div");
let buttonSave = document.createElement("button");
let textarea = document.createElement("textarea");
let buttonUp = document.createElement("button");
let buttomDown = document.createElement("button");
buttonSave.innerHTML = "SAVE";
buttomDown.innerHTML = "DOWN";
buttonUp.innerHTML = "UP";
div.style.display = "flex";
div.style.flexDirection = "column";

buttonSave.onclick = () => {
  localStorage.setItem(localStorage.length + 1, textarea.value);
};

buttonUp.onclick = () => {
  let index;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      if (localStorage.getItem(key) === textarea.value) {
        index = key;
      }
    }
  }
  if (index === localStorage.length.toString()) {
    buttonUp.style.visibility = "hidden";
    return;
  }
  textarea.value = localStorage.getItem(+index + 1);
};

div.appendChild(buttonUp);
div.appendChild(textarea);
div.appendChild(buttomDown);
div.appendChild(buttonSave);
document.body.appendChild(div);
