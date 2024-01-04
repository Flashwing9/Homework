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
const minus = document.querySelector(".one");
const one = document.querySelector(".one");
const two = document.querySelector(".two")
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");
const decimalPoint = document.querySelector(".decimalPoint");
const zero = document.querySelector(".zero");
const equals = document.querySelector(".equals");

// const buttons = [display, clearAll, clearOne, divide, seven, eight, nine, multiply, four, five, six, minus, one, two, three, plus, decimalPoint, zero, equals,];

display.value = [100];

clearAll.addEventListener("click", function() {
    display.innerText = 0;
});

clearOne.addEventListener("click", function() {
    display.innerText = display.pop();
    console.log(display);
});