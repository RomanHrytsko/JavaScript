// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

//callback hell

// wakeUp("good", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
//   doExrcises("done", (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(data);
//     readBook(8, (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(data);
//       breakfast("cereal", (err, data) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(data);
//         washingDish(true, (err, data) => {
//           if (err) {
//             console.log(err);
//             return;
//           }
//           console.log(data);
//           comeToWork(true, (err, data) => {
//             if (err) {
//               console.log(err);
//               return;
//             }
//             console.log(data);
//             workProcess("100%", (err, data) => {
//               if (err) {
//                 console.log(err);
//                 return;
//               }
//               console.log(data);
//               haveSupper(true, (err, data) => {
//                 if (err) {
//                   console.log(err);
//                   return;
//                 }
//                 console.log(data);
//                 goBed(false, (err, data) => {
//                   if (err) {
//                     console.log(err);
//                     return;
//                   }
//                   console.log(data);
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// function wakeUp(weather, cb) {
//   setTimeout(() => {
//     if (weather === "bad") {
//       cb("User can't wake up, because he died", null);
//       return;
//     }
//     cb(null, "Hello world, i wake up and need to do exercises...");
//   }, 2000);
// }
// function doExrcises(process, cb) {
//   setTimeout(() => {
//     if (process === "failure") {
//       cb("To continue your day, you need to do exrecises", null);
//       return;
//     }
//     cb(null, "Exercise is done, next you need to read a book...");
//   }, 1000);
// }
// function readBook(hour, cb) {
//   setTimeout(() => {
//     if (hour > 9) {
//       cb("It is too late to read a book", null);
//       return;
//     }
//     cb(null, "I read a book and it's time to have a breakfast...");
//   }, 3000);
// }
// function breakfast(food, cb) {
//   setTimeout(() => {
//     if (food === "no food") {
//       cb("i can't start my day, because i need to eat something", null);
//       return;
//     }
//     cb(null, "i enjoy my meel, now i need to wash a dishes...");
//   }, 6000);
// }
// function washingDish(isClean, cb) {
//   setTimeout(() => {
//     if (!isClean) {
//       cb("dishes are dirty, i need to wash them", null);
//       return;
//     }
//     cb(null, "dishes are clean, now i will drive to work...");
//   }, 2000);
// }
// function comeToWork(isCome, cb) {
//   setTimeout(() => {
//     if (!isCome) {
//       cb("I today i cant arrive to the job", null);
//       return;
//     }
//     cb(null, "I arrived to the job and ready to start...");
//   }, 1500);
// }

// function workProcess(process, cb) {
//   setTimeout(() => {
//     if (process !== "100%") {
//       cb("Still working, and need complete my job", null);
//       return;
//     }
//     cb(null, "Work is done, need to buy food in Auchan...");
//   }, 1000);
// }
// function haveSupper(hasFood, cb) {
//   setTimeout(() => {
//     if (!hasFood) {
//       cb("I dont have enough food to cook, so I need back to Auchan", null);
//       return;
//     }
//     cb(null, "I supper was delishes, im tired and want sleep...");
//   }, 3000);
// }
// function goBed(isTired, cb) {
//   setTimeout(() => {
//     if (!isTired) {
//       cb("I can watch Youtube, I dont want to sleep");
//       return;
//     }
//     cb("I go bed and have sweet dreams");
//   }, 1000);
// }

//Promise

// wakeUp("good")
//   .then((result) => {
//     console.log(result);
//     return doExrcises("done");
//   })
//   .then((process) => {
//     console.log(process);
//     return readBook(8);
//   })
//   .then((book) => {
//     console.log(book);
//     return breakfast("have food");
//   })
//   .then((meal) => {
//     console.log(meal);
//     return washingDish(true);
//   })
//   .then((washDish) => {
//     console.log(washDish);
//     return comeToWork(false);
//   })
//   .then((come) => {
//     console.log(come);
//     return workProcess("100%");
//   })
//   .then((workProc) => {
//     console.log(workProc);
//     return haveSupper(true);
//   })
//   .then((supper) => {
//     console.log(supper);
//     return goBed(true);
//   })
//   .then((tired) => {
//     console.log(tired);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("That was my sheldue");
//   });

//ASYNC AWAIT

// async function mySheldue() {
//   try {
//     const wakeup = await wakeUp("good");
//     console.log(wakeup);
//     const exercise = await doExrcises("done");
//     console.log(exercise);
//     const book = await readBook(8);
//     console.log(book);
//     const meal1 = await breakfast("have food");
//     console.log(meal1);
//     const washdish = await washingDish(true);
//     console.log(washdish);
//     const wayToWork = await comeToWork(true);
//     console.log(wayToWork);
//     const working = await workProcess("100%");
//     console.log(working);
//     const meal2 = await haveSupper("have food");
//     console.log(meal2);
//     const sleep = await goBed("Tired");
//     console.log(sleep);
//   } catch (e) {
//     console.log(e);
//   }
// }

// mySheldue();

// function wakeUp(weather) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (weather === "bad") {
//         reject("User can't wake up, because he died");
//         return;
//       }
//       resolve("Hello world, i wake up and need to do exercises...");
//     }, 2000);
//   });
// }
// function doExrcises(process) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (process === "failure") {
//         reject("To continue your day, you need to do exrecises");
//         return;
//       }
//       resolve("Exercise is done, next you need to read a book...");
//     }, 1000);
//   });
// }
// function readBook(hour) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (hour > 9) {
//         reject("It is too late to read a book");
//         return;
//       }
//       resolve("I read a book and it's time to have a breakfast...");
//     }, 3000);
//   });
// }
// function breakfast(food) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (food === "no food") {
//         reject("i can't start my day, because i need to eat something");
//         return;
//       }
//       resolve("i enjoy my meel, now i need to wash a dishes...");
//     }, 6000);
//   });
// }
// function washingDish(isClean) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isClean) {
//         reject("dishes are dirty, i need to wash them");
//         return;
//       }
//       resolve("dishes are clean, now i will drive to work...");
//     }, 2000);
//   });
// }
// function comeToWork(isCome) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isCome) {
//         reject("I today i cant arrive to the job");
//         return;
//       }
//       resolve("I arrived to the job and ready to start...");
//     }, 1500);
//   });
// }

// function workProcess(process) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (process !== "100%") {
//         reject("Still working, and need complete my job");
//         return;
//       }
//       resolve("Work is done, need to buy food in Auchan...");
//     }, 1000);
//   });
// }
// function haveSupper(hasFood) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!hasFood) {
//         reject("I dont have enough food to cook, so I need back to Auchan");
//         return;
//       }
//       resolve("I supper was delishes, im tired and want sleep...");
//     }, 3000);
//   });
// }
// function goBed(isTired) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isTired) {
//         reject("I can watch Youtube, I dont want to sleep");
//         return;
//       }
//       resolve("I go bed and have sweet dreams");
//     }, 1000);
//   });
// }

// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let string = "Hello World";
let arr = string.split("");

function randomNumb(max) {
  return Math.floor(Math.random(100) * Math.floor(max)); /// Функцыя яка рандомить мені інтервал
}

function typer(index) {
  setTimeout(() => {
    if (!index) {
      index = 0;
    }
    if (index < arr.length) {
      console.log(arr[index]);
      typer(++index);
    }
  }, randomNumb(1000));
}
typer();
// function vehicle(index) {
//   setTimeout(() => {
//     if (!index) {
//       index = 0;
//     }
//     if (index < arr.length) {
//       console.log(arr[index]);
//       vehicle(++index);
//     }
//   }, randomNumb(1000));
// }

// vehicle();

// function typer(string, i) {
//   return new Promise((resolve) => {
//     let letter = string.split("");
//     setTimeout(() => {
//       resolve(letter[i]);
//     }, randomNumb(1000));
//   });
// }
// async function cicle(str) {
//   for (let i = 0; i < str.length; i++) {
//     const res = await typer(str, i);
//     console.log(res);
//   }
// }
// cicle("hello");

// function typewriter(string, i) {
//   return new Promise((resolve) => {
//     let letters = string.split(``);
//     setTimeout(() => {
//       resolve(letters[i]);
//     }, Math.random() * 1000);
//   });
// }

// async function xXx(str) {
//   for (let i = 0; i < str.length; i++) {
//     const value = await typewriter(str, i);
//     console.log(value);
//   }
// }

// xXx("Hello world")
