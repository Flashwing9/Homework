const letterA = document.querySelector(".letterA");
const letterB = document.querySelector(".letterB");
const letterC = document.querySelector(".letterC");
const letterD = document.querySelector(".letterD");
const letterE = document.querySelector(".letterE");
const letterF = document.querySelector(".letterF");
const letterG = document.querySelector(".letterG");
const letterH = document.querySelector(".letterH");
const letterI = document.querySelector(".letterI");
const letterJ = document.querySelector(".letterJ");
const letterK = document.querySelector(".letterK");
const letterL = document.querySelector(".letterL");
const letterM = document.querySelector(".letterM");
const letterN = document.querySelector(".letterN");
const letterO = document.querySelector(".letterO");
const letterP = document.querySelector(".letterP");
const letterQ = document.querySelector(".letterQ");
const letterR = document.querySelector(".letterR");
const letterS = document.querySelector(".letterS");
const letterT = document.querySelector(".letterT");
const letterU = document.querySelector(".letterU");
const letterV = document.querySelector(".letterV");
const letterW = document.querySelector(".letterW");
const letterX = document.querySelector(".letterX");
const letterY = document.querySelector(".letterY");
const letterZ = document.querySelector(".letterZ");
let word = document.querySelector(".word");

let categories = {
    animals: ["dog", "cat", "elephant", "grasshopper", "chameleon"],
    fruits: ["apple", "orange", "pineapple", "watermelon", "melon",],
    vegetables: ["cucumber", "cellery", "onion", "broccoli", "potato"]
};



letterA.addEventListener("click", function() {
    word.innerText += "A";
    console.log("button A is working");
});


let x = 0;
while (x <= 3) {
  console.log(x++);
}