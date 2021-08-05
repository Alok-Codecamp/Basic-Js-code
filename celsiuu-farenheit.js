function celsiusToFarenheit(celsius) {
  let farenheit = celsius * 1.8 + 32;
  return farenheit;
}

let farenheit = celsiusToFarenheit(30);
farenheit = parseFloat(farenheit).toFixed(2);

console.log("Today tempareture is ", farenheit);
