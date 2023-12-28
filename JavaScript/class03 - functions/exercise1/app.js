// Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
// Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do


let userInput = prompt("How much money do you have?");
let numberValue = Number(userInput); /* pretvara vo broj*/
let isNumberInvalid = Number.isNaN(numberValue); /* proveruva dali e NaN*/

if (userInput === null) {
    console.log("do NOT click the cancel button");
} else if (userInput === "") {
    console.log("you didnt enter anything");
} else if (userInput === NaN) {
    console.log("invalid input");
} else if (userInput === undefined) {
    console.log("that value is undefined");
} else if (isNumberInvalid) {
    console.log("that is not a number");
} else if (userInput >= 100) {
    console.log("you should spend it wisely");
} else if (userInput >= 50) {
    console.log("you can go out and have a nice night");
} else if (userInput >= 10) {
    console.log("you should save up your money");
} else if (userInput < 10) {
    console.log("you should work and save up some money");
}