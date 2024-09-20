// const a = function () {
//   console.log("a==>", this);

//   const b = function () {
//     console.log("b==>", this);

//     const c = {
//       hi: function () {
//         console.log("c==>", this);
//       },
//     };
//     c.hi();
//   };
//   b();
// };
// a();
// -----------------------------------------------

const obj = {
  name: "Zeus",
  play() {
    console.log("a", this);
    var anothePlay = function () {
      console.log("b", this);
    };
    play();
  },
};
