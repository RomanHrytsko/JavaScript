let area = {
  name: "area",
  action:
    "Каждый элемент <area> определяет активные области изображения, которые являются ссылками...",
  arrAtributes: [
    {
      titleOfAttr: "accsessKey",
      actionOfAttr: "Активация ссылки с помощью комбинации клавиш.",
    },
    {
      titleOfAttr: "coords",
      actionOfAttr: "Устанавливает координаты активной области.",
    },
    {
      titleOfAttr: "download",
      actionOfAttr: "Предлагает скачать указанный по ссылке файл.",
    },
  ],
};

let div = {
  name: "<div>",
  action:
    "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.",
  arrAtributes: [
    {
      attrName: "align",
      attrInfo: "Задает выравнивание содержимого тега <div>.",
    },
    {
      attrName: "title",
      attrInfo: "Добавляет всплывающую подсказку к содержимому.",
    },
  ],
};

let h1 = {
  name: "<h1>",
  action:
    "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.",
  arrAtributes: [
    {
      attrName: "align",
      attrInfo: "Задает выравнивание содержимого тега <div>.",
    },
  ],
};

let span = {
  name: "<span>",
  action:
    "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.",
  arrAtributes: [
    {
      attrName: "accesskey",
      attrInfo:
        "Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.",
    },
    {
      attrName: "class",
      attrInfo:
        "Определяет имя класса, которое позволяет связать тег со стилевым оформлением",
    },
  ],
};
let input = {
  name: "<input>",
  action:
    "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript. Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать следующие элементы формы: текстовое поле (text), поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента существует свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.",
  arrAtributes: [
    {
      attrName: "accept",
      attrInfo:
        "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.",
    },
    {
      attrName: "border",
      attrInfo: "Толщина рамки вокруг изображения.",
    },
  ],
};
let form = {
  name: "<from>",
  action:
    "Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.",
  arrAtributes: [],
};
let option = {
  name: "<option>",
  action:
    "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.",
  arrAtributes: [
    {
      attrName: "disabled",
      attrInfo: "Заблокировать для доступа элемент списка.",
    },
    {
      attrName: "label",
      attrInfo: "Указание метки пункта списка.",
    },
  ],
};
let select = {
  name: "<select>",
  action:
    "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.",
  arrAtributes: [
    {
      attrName: "required",
      attrInfo: "Список обязателен для выбора перед отправкой формы",
    },
    {
      attrName: "size",
      attrInfo: "Количество отображаемых строк списка.",
    },
  ],
};

// function Contructor(name, action, arrAttr) {
//   this.name = name;
//   this.action = action;
//   this.arrAttr = arrAttr;

//   function attrDescribe(arr) {
//     let string = "";
//     for (let elem of arr) {
//       for (value in elem) {
//         string += `
//         ${elem[value]}`;
//       }
//     }
//     return string;
//   }
//   console.log(`Name of tag is ${this.name}
//           Description of this tag
//           ${this.action},
//            Also this tag has got an atributes ${attrDescribe(this.arrAttr)}`);
// }
// let aConstr = new Contructor(area.name, area.action, area.arrAtributes);
// let divConst = new Contructor(h1.name, h1.action, h1.arrAtributes);
// let h1Constr = new Contructor(div.name, div.action, div.arrAtributes);
// let spanConstr = new Contructor(span.name, span.action, span.arrAtributes);
// let inputConstr = new Contructor(input.name, input.action, input.arrAtributes);
// let formConstr = new Contructor(form.name, form.action, form.arrAtributes);
// let optionConstr = new Contructor(
//   option.name,
//   option.action,
//   option.arrAtributes
// );
// let selectConstr = new Contructor(
//   select.name,
//   select.action,
//   select.arrAtributes
// );

// let divClassConstructor = new TagConstrctor(
//   div.name,
//   div.action,
//   div.arrAtributes
// );
// let h1ClassConstructor = new TagConstrctor(h1.name, h1.action, h1.arrAtributes);
// let spanClassConstructor = new TagConstrctor(
//   span.name,
//   span.action,
//   span.arrAtributes
// );
// let inputClassConstructor = new TagConstrctor(
//   input.name,
//   input.action,
//   input.arrAtributes
// );
// let formClassConstructor = new TagConstrctor(
//   form.name,
//   form.action,
//   form.arrAtributes
// );
// let optionClassConstructor = new TagConstrctor(
//   option.name,
//   option.action,
//   option.arrAtributes
// );
// let selectClassConstructor = new TagConstrctor(
//   select.name,
//   select.action,
//   select.arrAtributes
// );

const carDriver = {
  name: "Anton",
  age: 45,
};
const car = {
  model: "Opel",
  creator: "Germany",
  year: 2014,
  maxSpeed: 210,
};

// function drive(speed) {
//   console.log(`їдемо зі швидкістю ${speed}km на годину`);
// }
// function info(obj) {
//   for (elem in obj) {
//     console.log(`Information about car ${elem}: ${obj[elem]}`);
//   }
// }

// function increaseMaxSpeed(newspeed) {
//   car.maxSpeed += newspeed;
//   console.log(`New max speed ${car.maxSpeed}`);
// }
// function changeYear(newValue) {
//   car.year += newValue;
//   console.log(`Car year was updated to ${car.year}`);
// }

// function addDriver(objDriver) {
//   car.driver = objDriver;
//   console.log(car);
// }

// console.log(car);
// drive(100);
// increaseMaxSpeed(20);
// info(car);
// changeYear(6);
// addDriver(carDriver);

function carConstructor(model, creator, year, maxSpeed, driverObj) {
  this.model = model;
  this.creator = creator;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.driver = driverObj;

  function drive(speed) {
    console.log(`їдемо зі швидкістю ${speed}km на годину`);
  }
  function info(arguments) {
    for (let elem of arguments) {
      console.log(`Info ${elem}`);
    }
  }
  function increaseMaxSpeed(newSpeed) {
    console.log(`Max speed was increased ${this.maxSpeed + newSpeed}`);
  }
  function changeYear(newValue) {
    this.year += newValue;
    console.log(`Year war upgraded to ${this.year}`);
  }
  function driverr(newDriver) {
    for (let elem in newDriver) {
      this.driver = newDriver;
      console.log(newDriver[elem]);
    }
  }

  drive(120);
  info(arguments);
  increaseMaxSpeed(50);
  changeYear(5);
  driverr(this.driver);
}

let newCar = carConstructor("Opel", "Germany", 2014, 300, carDriver);
