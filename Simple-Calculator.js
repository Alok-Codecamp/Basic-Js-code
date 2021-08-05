function calculator(oparetor, num1, num2) {
  let result;
  if (oparetor == "+") {
    result = num1 + num2;
    return result;
  } else if (oparetor == "-") {
    result = num1 - num2;
    return result;
  } else if (oparetor == "*") {
    result = num1 * num2;
    return result;
  } else if (oparetor == "/") {
    result = num1 / num2;
    return result;
  } else {
    console.log(" please enter a write operator");
  }
}

let substract = calculator("/", 10, 5);
console.log(substract);
