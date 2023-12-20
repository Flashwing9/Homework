// STUDENT EXERCISE - #3
// REGISTER USER
// Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
// On click of the button call a function that will get all the inputs' values and use the values as parameters for a new function which will add them to string
// Finaly print the string in a new p element on the screen




const firstNameInput = document.querySelector(".firstName");
const lastNameInput = document.querySelector(".lastName");
const emailInput = document.querySelector(".email");
const passInput = document.querySelector(".pass");
// const clickSubmit = document.querySelectorAll("input");

finalForm = function (firstNameInput, lastNameInput, emailInput, passInput) {
    return `${firstNameInput}, ${lastNameInput}, ${emailInput}, ${passInput}.`;
}



console.log(finalForm());
// console.log(firstNameInput, lastNameInput, emailInput, passInput);