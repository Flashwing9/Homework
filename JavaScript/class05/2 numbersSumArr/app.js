// HOMEWORK PART 2
// Print all numbers from an  and the sum

// Create an with numbers
// Print all numbers from the in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

// od yt tutorial vidov deka .textContent moze i vo ist red da se vmetne. Polesno mi e vaka da go pravam



let arr = [1, 2, 3, 4, 5,];

const storeArrIntoList1 = document.querySelector(".listItem1").textContent = arr[0];
const storeArrIntoList2 = document.querySelector(".listItem2").textContent = arr[1];
const storeArrIntoList3 = document.querySelector(".listItem3").textContent = arr[2];
const storeArrIntoList4 = document.querySelector(".listItem4").textContent = arr[3];
const storeArrIntoList5 = document.querySelector(".listItem5").textContent = arr[4];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

const printArrSum = document.querySelector("p").textContent = `the sum of the above numbers is ${sum}`;
