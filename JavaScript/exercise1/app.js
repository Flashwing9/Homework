// Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
// Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do


let moneyAmount = prompt("How much money do you have?");

if (moneyAmount === null) {
    console.log("do NOT click the cancel button");
} else if (moneyAmount === "") {
    console.log("you didnt enter anything");
} else if (moneyAmount === NaN) {
    console.log("invalid input");
} else if (moneyAmount === undefined) {
    console.log("that value is undefined");
} else if (typeof moneyAmount === "string") {
    console.log("that is a string, enter a number");
} else if (moneyAmount >= 100) {
    console.log("you should spend it wisely");
}