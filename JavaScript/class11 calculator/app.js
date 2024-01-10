console.log("happy new year");

let display = document.querySelector(".display");
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
const two = document.querySelector(".two")
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");
const decimalPoint = document.querySelector(".decimalPoint");
const zero = document.querySelector(".zero");
const equals = document.querySelector(".equals");


clearAll.addEventListener("click", function() {
    display.value = "";
    console.log("clear all is working");
});


// NUMBERS
one.addEventListener("click", function() {
    display.value += 1;
    console.log("im working1");
});

two.addEventListener("click", function() {
    display.value += 2;
    console.log("im working2");
});

three.addEventListener("click", function() {
    display.value += 3;
    console.log("im working3");
});

four.addEventListener("click", function() {
    display.value += 4;
    console.log("im working4");
});

five.addEventListener("click", function() {
    display.value += 5;
    console.log("im working5");
});

six.addEventListener("click", function() {
    display.value += 6;
    console.log("im working6");
});

seven.addEventListener("click", function() {
    display.value += 7;
    console.log("im working7");
});

eight.addEventListener("click", function() {
    display.value += 8;
    console.log("im working8");
});

nine.addEventListener("click", function() {
    display.value += 9;
    console.log("im working9");
});

zero.addEventListener("click", function() {
    display.value += 0;
    console.log("im working0");
});

let numbers = one || two || three || four || five || six || seven || eight || nine || zero



// OPERANDS
divide.addEventListener("click", function() {
    display.value += "÷";
    console.log("divide is working");
});

multiply.addEventListener("click", function() {
    display.value += "x"
    console.log("multiply is working");
});

minus.addEventListener("click", function() {
    display.value += "-"
    console.log("minus is working");
});

plus.addEventListener("click", function() {
    display.value += "+";
    console.log("plus is working fine");
});

decimalPoint.addEventListener("click", function() {
    display.value += ".";
    console.log("decimal point is working");
})

equals.addEventListener("click", function() {
    secondNum = display.value;
    console.log(`equals is working ${secondNum}`);
    console.log(typeof secondNum);
});




let firstNum;
let secondNum;

plus.addEventListener("click", function() {
    firstNum = display.value;
    // display.value = "+";
    console.log(`this is the first number ${firstNum}`);
});