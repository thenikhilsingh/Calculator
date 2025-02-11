let arg1 = 0;
let arg2 = 0;
let operand = 0;
let store = 0;
let bksp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>backspace-outline</title><path d="M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12L19,15.59M22,3A2,2 0 0,1 24,5V19A2,2 0 0,1 22,21H7C6.31,21 5.77,20.64 5.41,20.11L0,12L5.41,3.88C5.77,3.35 6.31,3 7,3H22M22,5H7L2.28,12L7,19H22V5Z" /></svg>`;
let opflag = false;

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

function calculate(num1, operator, num2) {
  if (operator == "+") {
    output = add(num1, num2);
    displaybox.innerHTML = output;
  } else if (operator == "-") {
    output = subtract(num1, num2);
    displaybox.innerHTML = output;
  } else if (operator == "*") {
    output = multiply(num1, num2);
    displaybox.innerHTML = output;
  } else if (operator == "/") {
    output = divide(num1, num2);
    displaybox.innerHTML = output;
  } else if (operator == "%") {
    output = remainder(num1, num2);
    displaybox.innerHTML = output;
  } else {
    output = "enter a valid input";
    displaybox.innerHTML = output;
  }
}

let displayAfter = document.querySelector(".displayAfter");
displayAfter.innerHTML = "";
let displaybox = document.querySelector(".displaybox");
displaybox.innerHTML = "0";
let output = "";

let ac = document.querySelector(".ac");
let acflag = false;
ac.addEventListener("click", () => {
  if (acflag) {
    opflag = false;
    decflag = false;
    output = "";
    displaybox.innerHTML = 0;
    displayAfter.innerHTML = "";
  } else {
    if (
      output[output.length - 1] == "+" ||
      output[output.length - 1] == "-" ||
      output[output.length - 1] == "*" ||
      output[output.length - 1] == "/" ||
      output[output.length - 1] == "%" ||
      output[output.length - 1] == "."
    ) {
      opflag = false;
      decflag = false;
    }

    output = output.slice(0, -1);
    displaybox.innerHTML = output;
    if (output == "") {
      acflag = true;
      ac.innerHTML = "AC";
    }
  }
});

let signAddMin = document.querySelector(".signAddMin");
let signAddMinflag = false;
signAddMin.addEventListener("click", () => {
  if (signAddMinflag == false) {
    signAddMinflag = true;
    displaybox.innerHTML = -output;
  } else {
    signAddMinflag = false;
    displaybox.innerHTML = output;
  }
});

let modulus = document.querySelector(".modulus");
modulus.addEventListener("click", () => {
  if (opflag) {
    if (
      output[output.length - 1] == "-" ||
      output[output.length - 1] == "*" ||
      output[output.length - 1] == "/" ||
      output[output.length - 1] == "%" ||
      output[output.length - 1] == "+"
    ) {
      output = output.slice(0, -1);
      output += "%";
      displaybox.innerHTML = output;
      return;
    }
    operate();
    displaybox.innerHTML = output;
  } else {
    opflag = true;
    decflag = true;
    ac.innerHTML = bksp;
    operand = "%";
    output += "%";
    displaybox.innerHTML = output;
  }
});

let division = document.querySelector(".division");
division.addEventListener("click", () => {
  if (opflag) {
    acflag = false;
    if (
      output[output.length - 1] == "-" ||
      output[output.length - 1] == "*" ||
      output[output.length - 1] == "/" ||
      output[output.length - 1] == "%" ||
      output[output.length - 1] == "+"
    ) {
      output = output.slice(0, -1);
      output += "/";
      displaybox.innerHTML = output;
      return;
    }
    operate();
    displaybox.innerHTML = output;
  } else {
    opflag = true;
    decflag = true;
    ac.innerHTML = bksp;
    operand = "/";
    output += "/";
    displaybox.innerHTML = output;
  }
});

let seven = document.querySelector(".vii");
seven.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "7";
  displaybox.innerHTML = output;
});

let eight = document.querySelector(".viii");
eight.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "8";
  displaybox.innerHTML = output;
});

let nine = document.querySelector(".ix");
nine.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "9";
  displaybox.innerHTML = output;
});

let multiplication = document.querySelector(".multiplication");
multiplication.addEventListener("click", () => {
  if (opflag) {
    acflag = false;
    if (
      output[output.length - 1] == "-" ||
      output[output.length - 1] == "*" ||
      output[output.length - 1] == "/" ||
      output[output.length - 1] == "%" ||
      output[output.length - 1] == "+"
    ) {
      output = output.slice(0, -1);
      output += "*";
      displaybox.innerHTML = output;
      return;
    }
    operate();
    displaybox.innerHTML = output;
  } else {
    opflag = true;
    decflag = true;
    ac.innerHTML = bksp;
    operand = "*";
    output += "*";
    displaybox.innerHTML = output;
  }
});

let four = document.querySelector(".iv");
four.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "4";
  displaybox.innerHTML = output;
});

let five = document.querySelector(".v");
five.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "5";
  displaybox.innerHTML = output;
});

let six = document.querySelector(".vi");
six.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "6";
  displaybox.innerHTML = output;
});

let subtraction = document.querySelector(".subtraction");
subtraction.addEventListener("click", () => {
  if (opflag) {
    acflag = false;
    if (
      output[output.length - 1] == "-" ||
      output[output.length - 1] == "*" ||
      output[output.length - 1] == "/" ||
      output[output.length - 1] == "%" ||
      output[output.length - 1] == "+"
    ) {
      output = output.slice(0, -1);
      output += "-";
      displaybox.innerHTML = output;
      return;
    }
    operate();
    displaybox.innerHTML = output;
  } else {
    opflag = true;
    decflag = true;
    ac.innerHTML = bksp;
    operand = "-";
    output += "-";
    displaybox.innerHTML = output;
  }
});

let one = document.querySelector(".i");
one.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "1";
  displaybox.innerHTML = output;
});

let two = document.querySelector(".ii");
two.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "2";
  displaybox.innerHTML = output;
});

let three = document.querySelector(".iii");
three.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "3";
  displaybox.innerHTML = output;
});

let addition = document.querySelector(".addition");
addition.addEventListener("click", () => {
  if (opflag) {
    acflag = false;
    if (
      output[output.length - 1] == "-" ||
      output[output.length - 1] == "*" ||
      output[output.length - 1] == "/" ||
      output[output.length - 1] == "%" ||
      output[output.length - 1] == "+"
    ) {
      output = output.slice(0, -1);
      output += "+";
      displaybox.innerHTML = output;
      return;
    }
    operate();
    displaybox.innerHTML = output;
  } else {
    opflag = true;
    decflag = true;
    ac.innerHTML = bksp;
    operand = "+";
    output += "+";
    displaybox.innerHTML = output;
  }
});

let darklightMode = document.querySelector(".darklightMode");
let modeflag = false;
darklightMode.addEventListener("click", () => {
  if (modeflag == false) {
    modeflag = true;
    document.body.style.cssText = "background:white;";
    displaybox.style.cssText = "color:black;";
  } else {
    modeflag = false;
    document.body.style.cssText = "background:black;";
    displaybox.style.cssText = "color:white;";
  }
});

let zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
  acflag = false;
  decflag = false;
  ac.innerHTML = bksp;
  output += "0";
  displaybox.innerHTML = output;
});

let decimal = document.querySelector(".decimal");
let decflag = false;
let decflag2 = false;
decimal.addEventListener("click", () => {
  if (decflag || decflag2) {
    ac.innerHTML = bksp;
    displaybox.innerHTML = output;
  } else {
    decflag = true;
    acflag = false;
    ac.innerHTML = bksp;
    output += ".";
    displaybox.innerHTML = output;
  }
});

let isEqualTo = document.querySelector(".isEqualTo");
isEqualTo.addEventListener("click", operate);

function operate() {
  if (output == "") {
    displaybox.innerHTML = "enter an input";
    displaybox.style.cssText = "font-size:40px";
  } else {
    acflag = true;
    ac.innerHTML = "AC";
    let args = output.split(operand);
    arg1 = parseFloat(args[0]);
    arg2 = parseFloat(args[1]);
    displayAfter.innerHTML = output;
    calculate(arg1, operand, arg2);
    if (num2 == 0) {
    } else {
      acflag = true;
      ac.innerHTML = "AC";
      let args = output.split(operand);
      arg1 = parseFloat(args[0]);
      arg2 = parseFloat(args[1]);
      displayAfter.innerHTML = output;
      calculate(arg1, operand, arg2);
    }
  }
}
