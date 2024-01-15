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
const gameOver = document.querySelector(".gameOver");
const letterButton = document.querySelectorAll(".letterButton");

const categories = {
  animals: ["dog", "beetle", "elephant", "grasshopper", "chameleon"],
  fruits: ["apple", "orange", "pineapple", "watermelon", "banana"],
  vegetables: ["cucumber", "cellery", "onion", "broccoli", "potato"],
};

const englishAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

englishAlphabet.forEach((letter) => {
  let elementSelector = document.querySelector(".letter" + letter);
  elementSelector.addEventListener("click", function () {
    replaceLetter(letter, elementSelector);
  });
});

const categoryType = ["animals", "fruits", "vegetables"];

let categoryIndex = Math.floor(Math.random() * 3);
let wordIndex = Math.floor(Math.random() * 5);
let makeItUnknown;
let currentWord;

function chooseWord(indexNumber, type) {
  chosenCategory.innerText = type;
  currentWord = categories[type][indexNumber];
  makeItUnknown = "_ ".repeat(currentWord.length);
  word.innerText = makeItUnknown;
  console.log(
    `current animal is ${categories[type][indexNumber]} or ${makeItUnknown}`
  );
}

chooseWord(wordIndex, categoryType[categoryIndex]);

let wordDisplay = document.querySelector(".word");
let displayedWord = "_ ".repeat(currentWord.length);
let countNumber = 0;

function updateDisplay() {
  wordDisplay.innerText = displayedWord;
}

function replaceLetter(letter, elementSelector) {
  let isInside = false;

  for (let i = 0; i < currentWord.length; i++) {
    console.log(i);
    console.log(currentWord[i]);
    if (currentWord[i].toLowerCase() === letter.toLowerCase()) {
      let firstPart = displayedWord.substring(0, 2 * i);
      let secondPart = displayedWord.substring(2 * i + 1);
      displayedWord = firstPart + letter + secondPart;
      isInside = true;
    }
  }

  if (!isInside) {
    counter.innerText = `counter: ${countNumber++}`;
    console.log(`current count is ${countNumber}`);
  }
  if (countNumber === 1) {
    phase2.style.zIndex = "2";
  } else if (countNumber === 2) {
    phase3.style.zIndex = "3";
  } else if (countNumber === 3) {
    phase4.style.zIndex = "4";
  } else if (countNumber === 4) {
    phase5.style.zIndex = "5";
  } else if (countNumber === 5) {
    phase6.style.zIndex = "6";
  } else if (countNumber === 6) {
    phase7.style.zIndex = "7";
  } else {
    gameOver.style.zIndex = "8";
    console.log("game over");
  }
  updateDisplay();
  elementSelector.setAttribute("disabled", "true");
}

updateDisplay();

const playButton = document.querySelector("#playButton");
playButton.addEventListener("click", () => resetGame());

function resetGame() {
  console.log("RESET GAME");
  counter.innerText = `counter: 0`;
  countNumber = 0;
  phase2.style.zIndex = "0";
  phase3.style.zIndex = "0";
  phase4.style.zIndex = "0";
  phase5.style.zIndex = "0";
  phase6.style.zIndex = "0";
  phase7.style.zIndex = "0";
  gameOver.style.zIndex = "0";
  categoryIndex = Math.floor(Math.random() * 3);
  wordIndex = Math.floor(Math.random() * 5);
  chooseWord(wordIndex, categoryType[categoryIndex]);
  console.log(letterButton);

  letterButton.forEach((letter) => {
    letter.removeAttribute("disabled");
  });


}
