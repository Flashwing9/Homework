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




// ne raboti
// const selectLastDiv = document.querySelector("body").lastElementChild;
// const lastH1 = selectLastDiv.querySelector("h1");
// lastH1.innerText = "it is now changed";

const allDivs = document.querySelectorAll("div");
const lastDiv = allDivs[allDivs.length - 1];
const lastH1 = lastDiv.querySelector("h1");
lastH1.innerText = "finally changed";

const lastH3 = lastDiv.querySelector("h3").innerText = "changed by student";
