let arg1 = 0;
let arg2 = 0;
let operand = 0;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

function operate(num1, operator, num2) {
  if (operator == "+") {
    return (displaybox.innerHTML = add(num1, num2));
  } else if (operator == "-") {
    return (displaybox.innerHTML = subtract(num1, num2));
  } else if (operator == "*") {
    return (displaybox.innerHTML = multiply(num1, num2));
  } else if (operator == "/") {
    return (displaybox.innerHTML = divide(num1, num2));
  } else if (operator == "%") {
    return (displaybox.innerHTML = remainder(num1, num2));
  } else {
    return (displaybox.innerHTML = "enter a valid input");
  }
}

let displaybox = document.querySelector(".displaybox");
displaybox.innerHTML = "0";
let output = "";

let ac = document.querySelector(".ac");
ac.addEventListener("click", () => {
  output = output.slice(0, -1);
  displaybox.innerHTML = output;
});

// let signAddMin=document.querySelector(".signAddMin")
// signAddMin.addEventListener("click")

let modulus = document.querySelector(".modulus");
modulus.addEventListener("click", () => {
  operand = "%";
  output += "%";
  displaybox.innerHTML = output;
});

let division = document.querySelector(".division");
division.addEventListener("click", () => {
  operand = "/";
  output += "/";
  displaybox.innerHTML = output;
});

let seven = document.querySelector(".vii");
seven.addEventListener("click", () => {
  output += "7";
  displaybox.innerHTML = output;
});

let eight = document.querySelector(".viii");
eight.addEventListener("click", () => {
  output += "8";
  displaybox.innerHTML = output;
});

let nine = document.querySelector(".ix");
nine.addEventListener("click", () => {
  output += "9";
  displaybox.innerHTML = output;
});

let multiplication = document.querySelector(".multiplication");
multiplication.addEventListener("click", () => {
  operand = "*";
  output += "*";
  displaybox.innerHTML = output;
});

let four = document.querySelector(".iv");
four.addEventListener("click", () => {
  output += "4";
  displaybox.innerHTML = output;
});

let five = document.querySelector(".v");
five.addEventListener("click", () => {
  output += "5";
  displaybox.innerHTML = output;
});

let six = document.querySelector(".vi");
six.addEventListener("click", () => {
  output += "6";
  displaybox.innerHTML = output;
});

let subtraction = document.querySelector(".subtraction");
subtraction.addEventListener("click", () => {
  operand = "-";
  output += "-";
  displaybox.innerHTML = output;
});

let one = document.querySelector(".i");
one.addEventListener("click", () => {
  output += "1";
  displaybox.innerHTML = output;
});

let two = document.querySelector(".ii");
two.addEventListener("click", () => {
  output += "2";
  displaybox.innerHTML = output;
});

let three = document.querySelector(".iii");
three.addEventListener("click", () => {
  output += "3";
  displaybox.innerHTML = output;
});

let addition = document.querySelector(".addition");
addition.addEventListener("click", () => {
  operand = "+";
  output += "+";
  displaybox.innerHTML = output;
});

// let calc=document.querySelector(".calc")
// calc.addEventListener("click")

let zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
  output += "0";
  displaybox.innerHTML = output;
});

let decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  output += ".";
  displaybox.innerHTML = output;
});

let isEqualTo = document.querySelector(".isEqualTo");
isEqualTo.addEventListener("click", () => {
  let args = output.split(operand);
  arg1 = parseInt(args[0]);
  arg2 = parseInt(args[1]);
  operate(arg1, operand, arg2);
});
