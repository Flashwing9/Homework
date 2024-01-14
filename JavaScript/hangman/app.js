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
let chosenCategory = document.querySelector(".chosenCategory");
let counter = document.querySelector(".counter");
const surprise = document.querySelector(".surprise");
const phase1 = document.querySelector(".phase1");
const phase2 = document.querySelector(".phase2");
const phase3 = document.querySelector(".phase3");
const phase4 = document.querySelector(".phase4");
const phase5 = document.querySelector(".phase5");
const phase6 = document.querySelector(".phase6");
const phase7 = document.querySelector(".phase7");

const categories = {
    animals: ["dog", "beetle", "elephant", "grasshopper", "chameleon"],
    fruits: ["apple", "orange", "pineapple", "watermelon", "banana",],
    vegetables: ["cucumber", "cellery", "onion", "broccoli", "potato"]
};


let categoryIndex = Math.floor(Math.random() * 3) + 1;
let wordIndex = Math.floor(Math.random() * 5) + 1;
let makeItUnknown;
let currentWord;




// ANIMALS
if (categoryIndex === 1) {
  console.log("animals will play");
  chosenCategory.innerText += ` Animals`;
  if (wordIndex === 1) {
    currentWord = "dog";
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current animal is ${categories.animals[0]} or ${makeItUnknown}`);
  } else if (wordIndex === 2) {
    currentWord = "beetle"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current animal is ${categories.animals[1]} or ${makeItUnknown}`);
  } else if (wordIndex === 3) {
    currentWord = "elephant"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current animal is ${categories.animals[2]} or ${makeItUnknown}`);
  } else if (wordIndex === 4) {
    currentWord = "grasshopper"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current animal is ${categories.animals[3]} or ${makeItUnknown}`);
  } else if (wordIndex === 5) {
    currentWord = "chameleon"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current animal is ${categories.animals[4]} or ${makeItUnknown}`);
  } else {
    console.log("invalid word");
  }

// FRUITS
} else if (categoryIndex === 2) {
  console.log("fruits will play");
  chosenCategory.innerText += ` Fruits`;
  if (wordIndex === 1) {
    currentWord = "apple"
    // makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current fruit is ${categories.fruits[0]} or ${makeItUnknown}`);
  } else if (wordIndex === 2) {
    currentWord = "orange"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current fruit is ${categories.fruits[1]} or ${makeItUnknown}`);
  } else if (wordIndex === 3) {
    currentWord = "pineapple"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current fruit is ${categories.fruits[2]} or ${makeItUnknown}`);
  } else if (wordIndex === 4) {
    currentWord = "watermelon"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current fruit is ${categories.fruits[3]} or ${makeItUnknown}`);
  } else if (wordIndex === 5) {
    currentWord = "banana"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current fruit is ${categories.fruits[4]} or ${makeItUnknown}`);
  } else {
    console.log("invalid word");
  }

// VEGGIES
} else if (categoryIndex === 3) {
  console.log("veggies will play");
  chosenCategory.innerText += ` Vegetables`;
  if (wordIndex === 1) {
    currentWord = "cucumber"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current veggie is ${categories.vegetables[0]} or ${makeItUnknown}`);
  } else if (wordIndex === 2) {
    currentWord = "cellery"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current veggie is ${categories.vegetables[1]} or ${makeItUnknown}`);
  } else if (wordIndex === 3) {
    currentWord = "onion"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current veggie is ${categories.vegetables[2]} or ${makeItUnknown}`);
  } else if (wordIndex === 4) {
    currentWord = "broccoli"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current veggie is ${categories.vegetables[3]} or ${makeItUnknown}`);
  } else if (wordIndex === 5) {
    currentWord = "potato"
    makeItUnknown = "_ ".repeat(currentWord.length);
    word.innerText = makeItUnknown;
    console.log(`current veggie is ${categories.vegetables[4]} or ${makeItUnknown}`);
  } else {
    console.log("invalid word");
  }
} else {
  console.log("invalid category");
}


letterA.addEventListener("click", function() {
  replaceLetter("A");
});

letterB.addEventListener("click", function() {
  replaceLetter("B");
});
letterC.addEventListener("click", function() {
  replaceLetter("C");
});
letterD.addEventListener("click", function() {
  replaceLetter("D");
});
letterE.addEventListener("click", function() {
  replaceLetter("E");
});
letterF.addEventListener("click", function() {
  replaceLetter("F");
});
letterG.addEventListener("click", function() {
  replaceLetter("G");
});
letterH.addEventListener("click", function() {
  replaceLetter("H");
});
letterI.addEventListener("click", function() {
  replaceLetter("I");
});
letterJ.addEventListener("click", function() {
  replaceLetter("J");
});
letterK.addEventListener("click", function() {
  replaceLetter("K");
});
letterL.addEventListener("click", function() {
  replaceLetter("L");
});
letterM.addEventListener("click", function() {
  replaceLetter("M");
});
letterN.addEventListener("click", function() {
  replaceLetter("N");
});
letterO.addEventListener("click", function() {
  replaceLetter("O");
});
letterP.addEventListener("click", function() {
  replaceLetter("P");
});
letterQ.addEventListener("click", function() {
  replaceLetter("Q");
});
letterR.addEventListener("click", function() {
  replaceLetter("R");
});
letterS.addEventListener("click", function() {
  replaceLetter("S");
});
letterT.addEventListener("click", function() {
  replaceLetter("T");
});
letterU.addEventListener("click", function() {
  replaceLetter("U");
});
letterV.addEventListener("click", function() {
  replaceLetter("V");
});
letterW.addEventListener("click", function() {
  replaceLetter("W");
});
letterX.addEventListener("click", function() {
  replaceLetter("X");
});
letterY.addEventListener("click", function() {
  replaceLetter("Y");
});
letterZ.addEventListener("click", function() {
  replaceLetter("Z");
});


let wordDisplay = document.querySelector(".word");
let displayedWord = "_ ".repeat(currentWord.length);
let countNumber = 0;

function updateDisplay() {
  wordDisplay.innerText = displayedWord;
}

function replaceLetter(letter) {
  for (let i = 0; i < currentWord.length; i++) {
    if (currentWord[i].toLowerCase() === letter.toLowerCase()) {
      displayedWord = displayedWord.substring(0, 2 * i) + letter + displayedWord.substring(2 * i + 1);
    }
  }
  if (currentWord != letter) {
    counter.innerText = `counter: ${countNumber++}`
    console.log(`current count is ${countNumber}`);
    
  } else if (currentWord === letter) {
    if (countNumber === 1) {
      phase2.style.zIndex = "2";
    } else if (countNumber === 2) {
      phase3.style.zIndex = "3";
    } else if (countNumber === 3) {
      phase4.style.zIndex = "4";
    } else if (countNumber === 4) {
      phase5.style.zIndex = "5";
    } else if (countNumber === 5) {
      phase6.style.zIndex = 6;
    } else if (countNumber === 6) {
      phase7.style.zIndex = 7; 
    }
  }
  updateDisplay();
  return countNumber, currentWord, letter;
}

updateDisplay();