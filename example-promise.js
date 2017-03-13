"use strict"
let add = (a,b) => a + b;
console.log(add(2,4));

let adds = (a,b) => {
  return a+b;
};
console.log(adds(2,6));

// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('Not found');
// }
//
// getTempCallback('London',function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('sucess', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function () {
//       resolve(79);
//       reject('Error not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('London').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });
//
//  Challenge Area
// function addPromise (a, b) {
//  return new Promise(function (resolve, reject) {
//       if (typeof a === 'number' && typeof b === 'number') {
//         resolve(a + b);
//       } else {
//         reject('Not numbers');
//       }
//   });
// }
//
//
// addPromise(2, 's').then(function (sum) {
//   console.log('yay', sum);
// }, function (err) {
//   console.log('oh no', err);
// });
//
// addPromise(2, 2).then(function (sum) {
//   console.log('yay', sum);
// }, function (err) {
//   console.log('oh no', err);
// });
