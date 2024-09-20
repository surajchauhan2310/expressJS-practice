// const { name } = require("ejs");

let coachName = {
  firstName: "Suraj",
  lastName: "Chauhan",
};

let playerName = {
  firstName: "Leo",
  lastName: "Messi",
};

let staffName = {
  firstName: "Paula",
  lastName: "Carvalho",
  getFullName: function () {
    console.log("This", this);
    return `${this.firstName}.${this.lastName}`;
  },
};

function getFullName() {
  console.log("This", this);
  return `${this.firstName} ${this.lastName}`;
}
function nationality(nat1, nat2) {
  console.log("Nationality==>", this);
  return `${this.firstName} ${this.lastName} is ${nat1}, ${nat2}`;
}
// function getEmail() {
//   return (this.email = `${this.firstName}.${this.lastName}@gmail.com`);
// }
function getEmail(param1, param2) {
  return (this.email = `${param1}.${param2}@gmail.com`);
}
//function borrowing- To borrow the function somewhere else
//call method

// console.log(getFullName.call(staffName));
// console.log(staffName.getFullName());
// console.log(getFullName.call(playerName));
// console.log(getFullName.call(coachName));
// console.log(nationality.call(coachName, "India", "Sweden", "Russia"));
// console.log(nationality.call(coachName, "India", "Norway"));
// console.log(getEmail.call(coachName));
// console.log(getFullName.call(staffName));
//apply()method used with the array. We have to pass the parameters in the the form of array
// console.log(nationality.apply(coachName, ["India", "Sweden"]));

//bind method
console.log(getFullName.bind(staffName));

const bindGetFullname = getFullName.bind(staffName);
console.log(bindGetFullname());
// const bindGetNationality = nationality.bind(staffName, "Ind", "Aus", "Kenya");
// // const bindEmail = getEmail.bind(coachName);
// const bindEmail = getEmail.bind(playerName, "Joe", "Doe");

// console.log(bindEmail());

// bindGetFullname();
// bindGetNationality();
// console.log(bindGetFullname());
// console.log(bindGetNationality());
