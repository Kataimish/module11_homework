function myFunction(a) {
  return function (b) {
    return a + b;
  };
}
const sumfunction = myFunction(11);
const sum = sumfunction(9);
console.log(sum);
