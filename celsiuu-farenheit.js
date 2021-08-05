function celsiusToFarenheit(cOrF, num) {
  if (cOrF == "c") {
    let farenheit = num * 1.8 + 32;
    return farenheit;
  } else if (cOrF == "f") {
    let celsius = (num - 32) / 1.8;
    return celsius;
  }
}

let farenheit = celsiusToFarenheit("c", 30);
farenheit = parseFloat(farenheit).toFixed(2);

console.log("Today tempareture is ", farenheit);
