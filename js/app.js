// JS => Single Threaded Language
// Stack => LIFO => Last In First Out
// Queue => FIFO => First In First Out

// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);

// function e() {
//   console.log("e");
// }

// function c() {
//   function d() {
//     console.log("d");
//     e();
//   }
//   setTimeout(() => {
//     console.log("c");
//   }, 0);
//   d();
// }

// function a() {
//   console.log("a");
//   function b() {
//     console.log("b");
//     c();
//   }
//   b();
// }

// a();
// a();

// let i = 0;
// function a() {
//   console.log(++i);
//   a();
// }
// a();

// Promise => va'da

// Callback Hell

// function tl() {
//   console.log("red");
//   setTimeout(() => {
//     console.log("yellow");

//     setTimeout(() => {
//       console.log("green");

//       setTimeout(() => {
//         console.log("yellow");

//         setTimeout(() => {
//           console.log("red");
//         }, 1000);
//       }, 3000);
//     }, 1000);
//   }, 3000);
// }

// tl();
// setInterval(tl, 9000);

// let car = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let r = Math.random();

//     if (r > 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 2_000);
// });

// car
//   .then(() => {
//     console.log("Uraaaa, Moshinali boldim 😃");
//   })
//   .catch(() => {
//     console.log("Essiz, Moshinasiz qoldim 😢");
//   })
//   .finally(() => {
//     console.log("Endi, Samalyot oldiraman 😇");
//   });

// function wait(time) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, time);
//   });
// }

// wait(3000)
//   .then(() => {
//     console.log("3 sekund otti");
//     return wait(3000);
//   })
//   .then(() => {
//     console.log("yana 3 sekund otti");
//     return wait(3000);
//   })
//   .then(() => {});

// .then chain
// function tl() {
//   console.log("red");
//   wait(3000)
//     .then(() => {
//       console.log("yellow");
//       return wait(1000);
//     })
//     .then(() => {
//       console.log("green");
//       return wait(3000);
//     })
//     .then(() => {
//       console.log("yellow");
//       return wait(1000);
//     })
//     .then(() => {
//       console.log("red");
//     });
// }
// tl();

// fetch("https://jsonplaceholder.sdfjs.cc")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
