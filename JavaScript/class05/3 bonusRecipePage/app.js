// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe ✅
// Ask the user how many ingredients do we need for the recipe ✅
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)



const nameRecipeInput = prompt("What recipe will you make?");
const amountOfIngredients = prompt("How many ingredients will you need?");

function storingIngredientNames() {
    let ingredientArr = [nameRecipeInput];
}

const printRecipeName = document.querySelector(".recipeName").textContent = nameRecipeInput;


// "Print to console": {
//     "prefix": "cl",
//     "body": [
//         "console.log();",
//     ],
//     "description": "Log output to console"
// // }
// }