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

// Fucntion constructor

// function carConstructor(model, creator, year, maxSpeed) {
//   this.model = model;
//   this.creator = creator;
//   this.year = year;
//   this.maxSpeed = maxSpeed;

//   this.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`);
//   };
//   this.info = function () {
//     console.log(this);
//   };

//   this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed;
//     console.log(`Max speed was increased  to ${this.maxSpeed}`);
//   };
//   this.changeYear = function (newValue) {
//     this.year = newValue;
//     console.log(`Year war changed on ${this.year}`);
//   };
//   this.addDriver = function (driver) {
//     this.driver = driver;
//   };
// }

// let newCar = new carConstructor("Opel", "Germany", 2014, 300);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(100);
// newCar.changeYear(2020);
// newCar.addDriver(carDriver);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class CarCreator {
//   constructor(model, creator, year, maxSpeed) {
//     this.model = model;
//     this.creator = creator;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//   }
//   drive() {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`);
//   }
//   info() {
//     console.log(this);
//   }
//   increaseMaxSpeed(newSpeed) {
//     console.log(`Max speed was increased to ${this.maxSpeed + newSpeed}`);
//   }
//   changeYear(newValue) {
//     console.log(`Year was changed on ${(this.year = newValue)}`);
//   }
//   addDriver(driver) {
//     this.driver = driver;
//   }
// }

// let classCar = new CarCreator("Opel", "Germany", 2014, 300);
// classCar.drive();
// classCar.info();
// classCar.increaseMaxSpeed(100);
// classCar.changeYear(2020);
// classCar.addDriver(carDriver);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushka {
//   constructor(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//   }
// }
// class Prince {
//   constructor(name, age, findedShoesSize) {
//     this.name = name;
//     this.age = age;
//     this.findedShoesSize = findedShoesSize;
//   }
// }

// let prince = new Prince("Gerald", 33, 40);

// let popelushka1 = new Popelushka("Vika", 25, 38);
// let popelushka2 = new Popelushka("Katia", 30, 38);
// let popelushka3 = new Popelushka("Olena", 50, 42);
// let popelushka4 = new Popelushka("Nastia", 24, 41);
// let popelushka5 = new Popelushka("Yulia", 29, 43);
// let popelushka6 = new Popelushka("Margarita", 32, 39);
// let popelushka7 = new Popelushka("Ira", 23, 40);
// let popelushka8 = new Popelushka("Sveta", 19, 39);
// let popelushka9 = new Popelushka("Tania", 22, 31);
// let popelushka10 = new Popelushka("Olia", 29, 32);

// let cinderellas = [
//   popelushka1,
//   popelushka2,
//   popelushka3,
//   popelushka4,
//   popelushka5,
//   popelushka6,
//   popelushka7,
//   popelushka8,
//   popelushka9,
//   popelushka10,
// ];

// for (let princes of cinderellas) {
//   if (princes.footSize === prince.findedShoesSize) {
//     console.log(princes);
//   }
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Popelushka(name, age, footSize) {
  this.name = name;
  this.age = age;
  this.footSize = footSize;
}
function Prince(name, age, findedShoesSize) {
  this.name = name;
  this.age = age;
  this.findedShoesSize = findedShoesSize;
}

let prince = new Prince("Gerald", 33, 40);

let popelushka1 = new Popelushka("Vika", 25, 38);
let popelushka2 = new Popelushka("Katia", 30, 38);
let popelushka3 = new Popelushka("Olena", 50, 42);
let popelushka4 = new Popelushka("Nastia", 24, 41);
let popelushka5 = new Popelushka("Yulia", 29, 43);
let popelushka6 = new Popelushka("Margarita", 32, 39);
let popelushka7 = new Popelushka("Ira", 23, 40);
let popelushka8 = new Popelushka("Sveta", 19, 39);
let popelushka9 = new Popelushka("Tania", 22, 31);
let popelushka10 = new Popelushka("Olia", 29, 32);

let cinderellas = [
  popelushka1,
  popelushka2,
  popelushka3,
  popelushka4,
  popelushka5,
  popelushka6,
  popelushka7,
  popelushka8,
  popelushka9,
  popelushka10,
];
function findCinderella(cinderellaArr, prince) {
  for (let princes of cinderellaArr) {
    if (princes.footSize === prince.findedShoesSize) {
      console.log(princes);
    }
  }
}

findCinderella(cinderellas, prince);
