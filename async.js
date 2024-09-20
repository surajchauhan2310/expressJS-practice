// async function getData() {
//   return "Hello world!";
// }
// console.log(getData());

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// console.log("3");

// function outer() {
//   console.log("This is a outer env");
//   function inner() {
//     console.log("This is inner env");
//     outer();
//   }
//   inner();
// }
// // outer();
// inner();

// function outer() {
//   let outerVar = "I am outside";

//   function inner() {
//     let innerVar = "I am inside";
//     console.log(outerVar); // Can access outerVar because of the lexical environment
//   }

//   inner();
//   console.log(innerVar); // Error: innerVar is not accessible here
// }
// outer();
// --------------------------------------------------------------
// console.log(x);

// console.log(hello());

// var x = "teddy";

// console.log(x);
// // console.log(demo());
// var demo = function () {
//   console.log("Hello Universe");
// };
// console.log(demo());
// function hello() {
//   return `hello world `;
// }

// function bigBrother() {
//   function littleBrother() {
//     return "it is me!";
//   }
//   return littleBrother();

//   function littleBrother() {
//     return "no me!";
//   }
// }

// console.log(bigBrother()); // "no me!"
// ------------------------------------------------------------------------
// arguements with the rest operators

// function india(...args) {
//   console.log("Arguements", Array.from(arguments));
//   console.log(
//     `India's capital is ${args[0]} and it ranks no ${args[1]} in the world`
//   );
// }
// india("Delhi", 7);

// let demo1 = function (cap, rank) {
//   console.log("Arguments=>", Array.from(arguments));
//   return `India's capital is ${cap} and it ranks no ${rank} in the world`;
// };

// demo1("New Delhi", 7);

// let demo2 = (cap, rank) => {
//   console.log("Arguments=>", Array.from(arguments));
//   return `India's capital is ${cap} and it ranks no ${rank} in the world`;
// };

// demo2("Rome", 14);
// -------------------------------------------------------
// creating a obj uisng new keyword and its effect on the function
// function hero(name, age) {
//   console.log(`Hi! I'm Hero! my name is ${name} and I'm ${age} years old.`);
// }

// const actor = (name, age) => {
//   console.log(`Hi! I'm an Actor! my name is ${name} and I'm ${age} years old`);
// };

// const h1 = new hero("Jake", 40);
// const a1 = actor("Mathew", 42);

// console.log(h1);
// console.log(a1);
// ------------------------------------------------------------------
// const myObj = {
//   myMethod: () => {
//     console.log("this=>>", this);
//     return this;
//   },
//   myMethod2: function () {
//     console.log("this 2=>>", this);
//     return this;
//   },
// };
// console.log(myObj.myMethod());
// console.log(myObj.myMethod2())
// ------------------------------------------------------
//Scope chaining
// function a1() {
//   let a = 10;
//   console.log(c);
//   return function b1() {
//     let b = 20;
//     console.log(b);
//     return function c1() {
//       let c = 30;
//       console.log(a);
//       return "Suraj Chauhan";
//     };
//   };
// }
// console.log(a1()()());
// -----------------------------------------------------------

// var hello = function hola() {
//   hola();
//   return `hello`;
// };

// console.log(hello());

// --------------------------------------------------------------
// this keyword
// const obj = {
//   firstName: "Walter ",
//   cook() {
//     return `${this.firstName} can cook some salt!`;
//   },
//   chef() {
//     return this.cook() + ` and some meth as well!`;
//   },
//   lastName: "White",
// };
// // console.log(`${this.name} can cook some meth!`);
// console.log(obj.firstName);
// console.log(obj.cook());
// console.log(obj.chef());

// -----------------------------------------------------------------------
// this keyword use case
// function impPerson() {
//   return `Hello! ` + this.name;
//   // console.log(this.name + `!`);
// }

// const name = "Natalie";

// const obj1 = {
//   name: "Sophie",
//   importantPerson: impPerson,
// };

// const obj2 = {
//   name: "Stan",
//   importantPerson: impPerson,
// };

// console.log(impPerson());
// console.log(obj1.importantPerson());
// console.log(obj2.importantPerson());

// -------------------------------------------------------------------------------------
// const person = {
//   name: "Alice",
//   printNameAfterDelay: function () {
//     setTimeout(function () {
//       console.log("Regular function:", this.name);
//     }, 1000);
//   },
//   printNameWithArrow: function () {
//     setTimeout(() => {
//       console.log("Arrow function:", this.name);
//     }, 1000);
//   },
// };

// person.printNameAfterDelay(); //undefined
// person.printNameWithArrow(); //Alice

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

const oddNumbers = numbers.filter(function (num) {
  return num % 2 === 1;
});
console.log(evenNumbers); // [2, 4]
console.log(oddNumbers);
