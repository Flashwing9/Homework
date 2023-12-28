// Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]



function combineNames(firstNames, lastNames) {
    if (firstNames.length !== lastNames.length) {
        return "Arrays must have the same length";
        }
    const fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
        if (typeof firstNames[i] === 'string' && typeof lastNames[i] === 'string') {
            fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
        } else {
        fullNames.push("Invalid name");
        }
    }

    return fullNames;
}


const firstNames = ["Bob", "Jill"];
const lastNames = ["Gregory", "Wurtz"];
const result = combineNames(firstNames, lastNames);
console.log(result);