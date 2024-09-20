function a() {
  var a = 5;
  return function b() {
    // console.log(a);
    return a;
  };
  //   return b;
}
var z = a();
console.log(z());
