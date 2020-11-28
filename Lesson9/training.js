//CALLBACKHELL
//
// function tour(money, cb) {
//   console.log("Hello, thank you for order");
//   console.log("wait please...");
//   setTimeout(() => {
//     if (money < 500) {
//       cb("sorry not enough money", null);
//       return;
//     }
//     cb(null, "Go to Egypt");
//   }, 2000);
// }

// tour(3000, (err, tour) => {
//   if (err) {
//     console.log("need to earn money");
//     return;
//   }

//   prepare(() => {
//     console.log("Im ready > go to Egypt");
//   });
//   console.log(tour);
// });

// function prepare(cb) {
//   setTimeout(() => {
//     cb();
//   }, 1000);
// }

// function howMuchMoney(money, cb) {
//   setTimeout(() => {
//     if (money < 500) {
//       cb("not enough", null);
//       return;
//     }
//     cb(null, "we buy new chair for gamers");
//   }, 2000);
// }

// howMuchMoney(100, (err, data) => {
//   if (err) {
//     console.log(err);
//     console.log("need more money");

//     return;
//   }
//   console.log(data);
// });

// function tour(money, cb) {
//   setTimeout(() => {
//     if (money < 500) {
//       cb("sambir river", null);
//       return;
//     }
//     cb(null, "red sea");
//   }, 2000);
// }

// tour(1000, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);

//   wear((err, data) => {
//     if (err) {
//       console.log("Fuck, i dont have ane wear");
//       return;
//     }
//     console.log(data);

//     moneyIneed((err, data) => {
//       if (err) {
//         return;
//       }
//       console.log(data);
//     });
//   });
// });

// function wear(cb) {
//   setTimeout(() => {
//     cb(null, "Take slipers");
//   }, 2000);
// }
// function moneyIneed(cb) {
//   setTimeout(() => {
//     cb(null, "you need 500$");
//   }, 1000);
// }

//PROMISE
//
// function tour(money) {
//   return new Promise((resolve, reject) => {
//     console.log("Hello, thank you for order");
//     console.log("wait please...");
//     setTimeout(() => {
//       if (money < 500) {
//         reject("sorry not enough money");
//         return;
//       }
//       resolve("Go to Egypt");
//     }, 2000);
//   });
// }

// function prepare() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Im ready");
//     }, 1000);
//   });
// }

// tour(300)
//   .then((tour) => {
//     console.log(tour);
//     return prepare();
//   })
//   .then((preparing) => {
//     console.log(preparing);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finish");
//   });
// async function pro() {
//   const pro1 = await promise1();
//   console.log(pro1);
//   const pro2 = await promise2();
//   console.log(pro2);
// }

// pro();

//FETCH
// fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
//   .then((value) => {
//     console.log(value);
//     return value.json();
//   })
//   .then((kurs) => {
//     kurs.forEach(({ ccy, base_ccy, buy, sale }) => {
//       document.write(`${ccy}:${base_ccy} SALE: ${sale} BUY:${buy} <br>`);
//     });
//   });

//Call Applay Carrying

// let user = {
//   name: "Karina",
//   payment: 20000,
// };

// function changePaymnet(newPaymnet) {
//   this.payment = newPaymnet;
//   console.log(this);
// }
// changePaymnet.apply(user);

//Замикання

// function user() {
//   let _login = "admin";
//   let _password = "123456";

//   function loginUser(login, password) {
//     if (login === _login && password === _password) {
//       console.log("Welcome");
//     } else {
//       console.log("wrong login or password");
//     }
//   }
//   return {
//     loginUser,
//   };
// }

// let admin = user();

// admin.loginUser("adin", "123456");

// function counter() {
//   let z = 0;
//   function plusOne() {
//     z++;
//     console.log(z);
//   }
//   return {
//     plusOne,
//   };
// }

// counter().plusOne();
