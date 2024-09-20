// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P1 Promise got reject!");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P2 Promise got rejected!");
//   }, 3000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P3 Promise got reject!");
//   }, 10000);
// });

//Promise.all API's demonstration
// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

//Promise.allSettled API's demonstration

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// console.log(abc[0].value);

//Promise.race API's race
// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

//Promise.any API's race
// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
//   });

//Live demo for the Promise API's

// const GITHUB_API1 = "https://api.github.com/users/surajchauhan2310";
const GITHUB_API1 = "https://api.github.com/users/surajchauhan2310"; //Intentionally rejecting the Promise by using the invalid URL
const GITHUB_API2 = "https://api.github.com/users/akshaymarch7";
const GITHUB_API3 = "https://api.github.com/users/vishalsg42";

// const data1 = fetch(GITHUB_API1);
const rej_data = Promise.reject("Intentional rejection of the first promise");
const data2 = fetch(GITHUB_API2);
const data3 = fetch(GITHUB_API3);

// console.log(data1);

rej_data.then((res) => console.log(res));
data2.then((res) => console.log(res));
data3.then((res) => console.log(res));

Promise.all([rej_data, data2, data3]).then((result) => console.log(result));
