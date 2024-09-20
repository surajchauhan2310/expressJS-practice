// "use strict";
// console.log(this);

// function abc() {
//   let a = "apple";
//   return this;
// }
// abc();

//this inide an object

const emp1 = {
  firstName: "Suraj",
  printname() {
    // console.log(this);
    return this.firstName + ` thankyou!`;
  },
};

const emp2 = {
  firstName: "Heisenberg",
  lastName: "DOTA",
};

// console.log(emp1.firstName);
// console.log(emp1.printname());
console.log(emp1.printname.call(emp2)); //accessed the first obj's firstName in the 2nd obj with the help of call() method.

//this value in the arrow function

const arrow = () => {
  return this;
};

const obj = {
  name: "Joe",
  arrowInsideObj: () => {
    return this;
  },
};

//Lexical env example for the this keyword

const objLoop = {
  val: "hello world!",
  x: function () {
    const y = () => {
      return this;
    };
    return y();
  },
};

const objLoop2 = {
  val: "hello world!",
  x: () => {
    const y = () => {
      return this;
    };
    return y();
  },
};

// console.log(arrow());
// console.log(obj.name);
console.log("FirstOutput", obj.arrowInsideObj());
console.log("SecondOutput", objLoop.x());
console.log("ThirdOutput", objLoop2.x());

//this value inside the DOM element => reference to the HTML element
