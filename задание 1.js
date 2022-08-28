let massiv = [1, 2, 0, 4, 5, 9, null, "ghb"];
function testArr(massiv) {
  let elEven = 0;
  let elOdd = 0;
  let el0 = 0;
  let elNull = 0;
  let elStr = 0;
  for (let i = 0; i < massiv.length; i++) {
    if (typeof massiv[i] === "string") {
      elStr = elStr + 1;
    } else if (massiv[i] === 0) {
      el0 = el0 + 1;
    } else if (massiv[i] === null) {
      elNull = elNull + 1;
    } else if (massiv[i] % 2 === 0) {
      elEven = elEven + 1;
    } else {
      elOdd = elOdd + 1;
    }
  }
  console.log("количество строчных элементов - " + elStr);
  console.log("количество пустых объектов - " + elNull);
  console.log("количество 0 - " + el0);
  console.log("количество чётных элементов - " + elEven);
  console.log("количество нечётных элементов - " + elOdd);
}
testArr(massiv);