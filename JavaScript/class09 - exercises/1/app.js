/* EXERCISE 1
Write a JavaScript function to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.


Ex. Input: 20 ==> Output: 14 */


// function numberDiff() {
//     input = 20;
//     if (input - 13 > 13) {
//         console.log(input - 13 * 2);
//     } else {
//         console.log("number is tiny");
//     }
// }

// numberDiff();






/* EXERCISE 2
Write a JavaScript function that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!

Ex. Input1: 20
Input2: 80
Output: 80 is closer to 100 */

// const input1 = 20;
// const input2 = 80;

// console.log(100 % 100);
// function checkifCloserTo100() {
    
// }


function closerTo100(num1, num2) {
    const target = 100;

    const diff1 = target - num1;
    const diff2 = target - num2;

    if (diff1 * diff1 < diff2 * diff2) {
        console.log(diff1 * diff1);
        console.log(diff2 * diff2);
        return `${num1} is closer to 100.`;
    } else if (diff2 * diff2 < diff1 * diff1) {
        return `${num2} is closer to 100.`;
    } else {
        return "Both numbers are equally close to 100.";
    }
}

const result = closerTo100(91, 110);
console.log(result);