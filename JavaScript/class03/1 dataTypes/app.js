// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:
// object
// boolean
// number
// string
// undefined

function getValue(input) {
    let type = typeof input;
    console.log(`the input type is: ${type}`);
    return type;
}
getValue(null);
getValue(true);
getValue(4);
getValue("hello");
let udf;
getValue(udf);

