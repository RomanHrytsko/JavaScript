let area = {
  name: "area",
  action:
    "Каждый элемент <area> определяет активные области изображения, которые являются ссылками...",
  attr: [
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

function TagDscription(name, act, attribute) {
  this.name = name;
  this.action = act;
  this.attr = attribute;

  //   console.log(attribute);

  function getAttributes(attributArr) {
    let string = "";

    for (let elem of attributArr) {
      for (let value in elem) {
        string += elem[value] + " , ";
      }
    }

    return string;
  }

  console.log(
    `Name of tag is ${name},   action is ${act},   Атрибути ${getAttributes(
      attribute
    )} `
  );
}

// let tag = new TagDscription(area.name, area.action, area.attr);

class TagName {
  constructor(name, action, attribute) {
    this.name = name;
    this.action = action;
    this.attribute = attribute;

    this.getAttributes(attribute);
  }

  getAttributes(attributArr) {
    let string = "";

    for (let elem of attributArr) {
      for (let value in elem) {
        string += elem[value] + " , ";
      }
    }

    console.log(
      `Name of tag is ${this.name},   action is ${this.action},   Атрибути ${string}`
    );
  }

  //   showResult() {
  //     console.log(
  //       `Name of tag is ${this.name},   action is ${this.action},   Атрибути ${this.finalString}`
  //     );
  //   }
}

let tagname = new TagName(area.name, area.action, area.attr);
// tagname.showResult();

////
const carDriver = {
  name: "Anton",
  age: 45,
};
const car = {
  model: "Opel",
  creator: "Germany",
  year: 2014,
  maxSpeed: 210,
  xxx: () => {},
};

function drive(speed) {
  console.log(`їдемо зі швидкістю ${speed}km на годину`);
}
function info(obj) {
  for (elem in obj) {
    console.log(obj[elem]);
  }
}

function increaseMaxSpeed(newspeed) {
  car.maxSpeed += newspeed;
}
function changeYear(newValue) {
  car.year = newValue;
}

function addDriver(objDriver) {
  car.driver = objDriver;
}
