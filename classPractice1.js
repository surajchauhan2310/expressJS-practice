class User {
  constructor(name, phone, email, password) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}xyz`;
  }
  changeUsername() {
    return `${this.name.toUpperCase()}`;
  }
}

// const hero = new User("Suraj", 9167665092, "23surajrc@gmail.com", "123@123");
// console.log(hero.encryptPassword());
// console.log(hero.changeUsername());

//Inheritance
class Bot extends User {
  constructor(name, phone, email, password, brand, version) {
    super(name, phone, email, password);
    this.brand = brand;
    this.version = version;
  }
  profile() {
    // console.log(
    //   `This is the profile of ${this.name} and his/her email is ${this.email}`
    // );
    return `This is the profile of ${this.name} and his/her email is ${this.email}`;
  }
}

const robot = new Bot(
  "alpino",
  9167665092,
  "test@gmail.com",
  "user@123",
  "AMD",
  9839938
);
console.log(robot);
console.log(robot.email);
console.log(robot.profile());
// console.log(robot);

console.log(robot instanceof User);
    