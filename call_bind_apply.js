// function hello() {
//   return `hola!`;
// }
// console.log(hello());
// console.log(hello.apply()); //Whenever we invoke the function, it uses the call method to invoke itself

// ---------------------------------------------------------------------------

// const wizard = {
//   name: "Krishna",
//   health: 100,
//   heal(val1, val2) {
//     return (this.health += val1 + val2);
//   },
// };

// const archer = {
//   name: "Arjuna",
//   health: 60,
// };

// // console.log(wizard.heal.call());
// console.log("Pre:", archer);
// // console.log("Current", wizard.heal.call(archer, 20, 10));
// console.log("Current", wizard.heal.apply(archer, [20, 10]));
// console.log("Post:", archer);

// --------------------------------------------------------------
// const array = [1, 2, 3];

// function getMaxNumber(arr) {
//   return Math.max.apply(null, arr);
// }

// console.log(getMaxNumber(array));

// -------------------------------------------------------------------

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
