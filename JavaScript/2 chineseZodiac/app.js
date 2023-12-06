let yearOfBirth = prompt("What year were you born in?");
let chineseZodiacFormula = (yearOfBirth - 4) % 12;
let repText = "In the chinese zodiac you are the animal";


if (yearOfBirth === null) {
    console.log("dont click cancel");
} else if (chineseZodiacFormula === 0) {
    console.log(repText, "rat");
} else if (chineseZodiacFormula === 1) {
    console.log(repText, "ox");
} else if (chineseZodiacFormula === 2) {
    console.log(repText, "tiger");
} else if (chineseZodiacFormula === 3) {
    console.log(repText, "rabbit");
} else if (chineseZodiacFormula === 4) {
    console.log(repText, "dragon");
} else if (chineseZodiacFormula === 5) {
    console.log(repText, "snake");
} else if (chineseZodiacFormula === 6) {
    console.log(repText, "horse");
} else if (chineseZodiacFormula === 7) {
    console.log(repText, "goat");
} else if (chineseZodiacFormula === 8) {
    console.log(repText, "monkey");
} else if (chineseZodiacFormula === 9) {
    console.log(repText, "rooster");
} else if (chineseZodiacFormula === 10) {
    console.log(repText, "dog");
} else if (chineseZodiacFormula === 11) {
    console.log(repText, "pig");
} else if (yearOfBirth === "") {
    console.log("you didnt enter anything");
} else if (yearOfBirth === NaN) {
    console.log("invalid input");
} else if (yearOfBirth === undefined) {
    console.log("that value is undefined");
}