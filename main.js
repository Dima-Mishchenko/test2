import utils from './js/utils/utils.js';

// function callAfter(ms, value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value);
//     }, ms);
//   });
// }

// callAfter(1000, "res").then(res => {
//   console.log('res', res);
//   console.log(10);
// });

// сделать 2 api запроса с помощью async/await и Promise.all

// async function f() {
//   try {
//     const res = await Promise.all([
//       callAfter(2000, "res"),
//       callAfter(2000, "12321"),
//       Promise.reject("some problem")
//     ]);
//     console.log('res', res);
//   } catch(err) {
//     console.log(err);
//   }
// }

// f();
// console.log(utils.add(3, 10));
// console.log(substract(100, 10));

// package.json