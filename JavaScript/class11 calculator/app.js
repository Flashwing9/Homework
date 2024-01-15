console.log("happy new year");
// debugger;
let display = document.querySelector(".display");
let firstNum = 0;
let secondNum = 0;
let operator = "";
let isLastCharOperator = false;

const clearAll = document.querySelector(".clearAll");
const clearOne = document.querySelector(".clearOne");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");
const decimalPoint = document.querySelector(".decimalPoint");
const zero = document.querySelector(".zero");
const equals = document.querySelector(".equals");

clearAll.addEventListener("click", function () {
  display.value = "";
  console.log("clear all is working");
});

// function test() {
//   console.log("test");
// }

// test();

// NUMBERS
one.addEventListener("click", function () {
  c;
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 1;
  isLastCharOperator = false;
  console.log("im working1");
});

two.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 2;
  isLastCharOperator = false;
  console.log("im working2");
});

three.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 3;
  isLastCharOperator = false;
  console.log("im working3");
});

four.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 4;
  isLastCharOperator = false;
  console.log("im working4");
});

five.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 5;
  isLastCharOperator = false;
  console.log("im working5");
});

six.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 6;
  isLastCharOperator = false;
  console.log("im working6");
});

seven.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 7;
  isLastCharOperator = false;
  console.log("im working7");
});

eight.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
//   debugger;
  display.value += 8;
  isLastCharOperator = false;
  console.log("im working8");
});

nine.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 9;
  isLastCharOperator = false;
  console.log("im working9");
});

zero.addEventListener("click", function () {
  if (isLastCharOperator) {
    display.value = "";
  }
  display.value += 0;
  isLastCharOperator = false;
  console.log("im working0");
});

// OPERANDS
divide.addEventListener("click", function () {
  if (firstNum) {
    secondNum = display.value;
    console.log(secondNum);
  } else {
    firstNum = display.value; // 655
  }
  if (!isLastCharOperator) {
    display.value += "÷";
    isLastCharOperator = true;
  }
  console.log("divide is working");
});

multiply.addEventListener("click", function () {
  if (firstNum) {
    secondNum = display.value;
    console.log(secondNum);
  } else {
    firstNum = display.value; // 655
  }
  if (!isLastCharOperator) {
    display.value += "x";
    isLastCharOperator = true;
  }
  console.log("multiply is working");
});

minus.addEventListener("click", function () {
  if (firstNum) {
    secondNum = display.value;
    console.log(secondNum);
  } else {
    firstNum = display.value; // 655
  }
  if (!isLastCharOperator) {
    display.value += "-";
    isLastCharOperator = true;
  }
  console.log("minus is working");
});

plus.addEventListener("click", function () {
  console.log(firstNum);
  if (firstNum) {
    console.log(firstNum);
    // debugger;
    let result = Number(firstNum) + Number(display.value);
    display.value = result;
    firstNum = result;
  } else {
    firstNum = display.value;
  }

  if (!isLastCharOperator) {
    display.value += "+";
    isLastCharOperator = true;
  }
  console.log("plus is working fine");
});

decimalPoint.addEventListener("click", function () {
  if (firstNum) {
    secondNum = display.value;
    console.log(secondNum);
  } else {
    firstNum = display.value;
  }
  if (!isLastCharOperator) {
    display.value += ".";
    isLastCharOperator = true;
  }
  console.log("decimal point is working");
});

equals.addEventListener("click", function () {
  console.log(firstNum);
});
