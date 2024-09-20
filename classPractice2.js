class Animal {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  speak1() {
    return `${this.name} roars`;
  }
}

class Dog extends Animal {
  constructor(userName, emailU) {
    super(userName, emailU);
  }
  speak2() {
    return `${this.name} barks`;
  }
}
const a = new Animal("King");
const d = new Dog("Tom", "tom@2test.com");
// console.log(d.email);
// console.log(a.speak1());

class Country {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Country();
console.log(obj.speak());
const obj2 = obj.speak;
console.log(obj2());
console.log(obj.speak());
