// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.


function arrSumNumbers(numbers) {
    if (numbers.lenght === 5) {
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        
        return total
    } else {
        return "Please enter 5 numbers"
    }
}

const numbersArr = [1, 2, 3, 4, 5,];
const result = arrSumNumbers();


const numbersArray = [1, 2, 3, 4, 5];
const finalResult = sumArrayWithoutReduce(numbersArray);
console.log(finalResult);


///////////////////////////////////////////////////////////


function validateNumber(params) {
    
}