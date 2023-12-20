// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed



const mainHeading = document.getElementById("mainHeading");
mainHeading.innerText += " is now changed by me!";


const firstParagraph = document.querySelector(".paragraph");
firstParagraph.innerText += ". <strong> And the exercise is completed. </strong>";


let lastHeading = document.querySelector("body").lastElementChild;
lastHeading = document.querySelector("div").firstElementChild;
lastHeading.innerText += "it is very responsive";