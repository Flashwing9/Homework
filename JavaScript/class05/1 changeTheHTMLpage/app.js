// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed



const mainHeading = document.getElementById("mainHeading");
mainHeading.innerText += " is now changed by me!";


const firstParagraph = document.querySelector(".paragraph");
firstParagraph.innerText += ". <strong> And the exercise is completed. </strong>";

const secondParagraph = document.querySelector(".second");
secondParagraph.innerText += "   And now i have been changed";




//kodov dolu ne mi uspeva, ne razbiram kade gresam
const lastDiv = document.querySelector("div").lastElementChild;
const lastDivH1 = lastDiv.querySelector("h1");
lastDivH1.innerText = "changed by student";