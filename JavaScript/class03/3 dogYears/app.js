// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well


function convertDogHumanYears(years) {
    let dogToHuman = years * 7;
    let humanToDog = years / 7;
    return dogToHuman, humanToDog;
}

let userChoice = prompt("enter d for dog years, h for human years");
let userInput = parseInt(prompt("please enter a value"));
if (userChoice === "d") {
    console.log(`${convertDogHumanYears(userInput)} years`);
} else if (userChoice === "h") {
    console.log(`${convertDogHumanYears(userInput)} years`);
} else {
    console.log("restart the page");
}