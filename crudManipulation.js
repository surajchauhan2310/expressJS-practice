const userArray = [];
class Crud {
  //   constructor() {}

  create() {
    return `${this.name} has been created successfully!`;
  }
  read() {
    return `${this.name} these people has been registered with the org!`;
  }
  update() {
    return `${this.name} has been updated successfully!`;
  }
  delete() {
    return `${this.name} has been deleted successfully!`;
  }
  fill(name, email) {
    this.name = name;
    this.email = email;
  }
}

const objUser1 = new Crud();
const objUser2 = new Crud();
const objUser3 = new Crud();
const objUser4 = new Crud();

const dataA = objUser1.fill("Suraj", "23surajrc@gmail.com");
objUser2.fill("Bilal", "bilal@gmail.com");
objUser3.fill("Suraj Maurya", "surajmaurya@gmail.com");
objUser4.fill("Shailu", "shailu@gmail.com");
  
// const data = userArray.push(() => {
//   for (let i = 1; i < userArray.length; i++) {
//     objUser[i].name;
//   }
// });
console.log(objUser1.read());
