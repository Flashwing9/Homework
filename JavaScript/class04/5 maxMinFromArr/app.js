// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14





function sumMaxMin(arr) {
    let max = -Infinity;
    let min = Infinity;
    let sum = 0;  

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);  

        sum += arr[i];
        }
    }

    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
    }
const arr = [3, 5, 6, 8, 11, 'string', true, null, undefined];
const result = sumMaxMin(arr);
console.log(result);