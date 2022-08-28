function func(x) {
  if (x === 0 || x === 1) {
    console.log("введено неверное число, попробуйте снова");
  } else if (x > 1000) {
    console.log("введено неверное число, попробуйте снова");
  } else {
    for (let i = 2; i <= x; i++) {
      if (x % i === 0) {
        return console.log(x + " - число не простое");
      } else {
        return console.log(x + " - число простое");
      }
    }
  }
}
func(3);
func(0);
func(1111);
func(666);
