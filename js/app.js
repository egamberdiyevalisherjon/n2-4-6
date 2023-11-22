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
