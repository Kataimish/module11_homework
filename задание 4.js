function consoleNumbers() {
  let a = 5;
  let b = setInterval(function () {
    console.log(a);
    if (a === 15) clearInterval(b);
    a++;
  }, 1000);
}
consoleNumbers(0, 160);
