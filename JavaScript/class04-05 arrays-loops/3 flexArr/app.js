// HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC !"



function concatenateStrings(arrayOfStrings) {
    if (!Array.isArray(arrayOfStrings)) {
        return "Error: Please provide an array of strings.";
    }

    const resultString = arrayOfStrings.join(" ");  
    return resultString;
    }
    
    const stringArray = ["Hello", "there", "!", "SEDC", "this", "is", "a", "test", "and", "another", "test", "and", "another",];
    const concatenatedString = concatenateStrings(stringArray);
    console.log(concatenatedString);