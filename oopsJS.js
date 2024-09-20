// const user = {
//   firstName: "Suraj",
//   lastName: "Chauhan",
//   age: 30,
//   getYOB: function () {
//     return new Date().getFullYear() - this.age;
//   },
// };

// console.log(user.getYOB());

// -------------------------------------------------------------

// function factoryUserFunc(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getYOB: factoryUserFunc.commonmethods.getYOB,
//   };
//   return user;
// }

// factoryUserFunc.commonmethods = {
//   getYOB() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// const user1 = factoryUserFunc("Bilal", "Choudhary", 29);
// const user2 = factoryUserFunc("Suraj", "Maurya", 25);

// console.log(bilal);

// console.log(user2.getYOB());
// console.log(user2.getYOB());

// console.log(user1.getYOB === user2.getYOB);
// const obj1 = factoryUserFunc("leo", "messi", 38);
// const obj2 = new factoryUserFunc("leo", "messi", 38);
// console.log(obj1);

// --------------------------------------------------------------------------------------------
// function CreateUser(name, email, age) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
// }

// CreateUser.prototype.getBirthYear = function () {
//   return new Date().getFullYear() - this.age;
// };

// const obj = new CreateUser("leo", "messi", 38);
// console.log(obj.getBirthYear());

class CreateUser {
  constructor(name, email, age) {
    // Simple type validation checks
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof age !== "number"
    ) {
      throw new Error("Invalid input types: Expected (string, string, number)");
    }
    this.name = name;
    this.email = email;
    this.age = age;
  }

  // Getter method to calculate birth year
  get birthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

// Example usage
const user = new CreateUser("Leo", "messi@example.com", 38);
console.log(user.birthYear); // Outputs the birth year
