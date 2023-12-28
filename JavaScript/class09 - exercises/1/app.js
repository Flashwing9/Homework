/* EXERCISE 1
Write a JavaScript function to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.


Ex. Input: 20 ==> Output: 14 */


function numberDiff() {
    input = 20;
    if (input - 13 > 13) {
        console.log(input - 13 * 2);
    } else {
        console.log("number is tiny");
    }
}

numberDiff();