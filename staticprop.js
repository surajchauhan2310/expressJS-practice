class User {
  constructor(name) {
    this.name = name;
    // this.id = this.createId();
  }
  //to restrict the particular to get accessed, to perform that we use static keyword
  createId() {
    return Math.floor(Math.random() * 100000);
  }
}
const worker1 = new User("Joe");
const worker2 = new User("Roegan");

// console.log(worker.createId());
// console.log(worker1.id);
// console.log(worker.createId());

class Player {
  //   constructor(name, email) {
  //     this.name = name;
  //     this.email = email;
  //   } //1st way
  constructor(name = "Joe", email = "Doe@test.com") {
    this.name = name;
    this.email = email;
  } //2nd way
}
// const starPlayer = new Player("Suraj", "test@gmail.com");//1st way
const starPlayer = new Player(); //2nd way
console.log(starPlayer.name);
