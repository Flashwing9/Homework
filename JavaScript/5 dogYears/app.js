// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function dogToHuman(years) {
    let conversion = years * 7;
    return conversion;
}

function humanToDog(years) {
    let conversion = years / 7;
    return conversion;
}

let userChoice = prompt("enter d for dog years, h for human years");
let userInput = parseInt(prompt("please enter a value"));
if (userChoice === "d") {
    console.log(`${dogToHuman(userInput)} years`);
} else if (userChoice === "h") {
    console.log(`${humanToDog(userInput)} years`);
} else {
    console.log("restart the page");
}