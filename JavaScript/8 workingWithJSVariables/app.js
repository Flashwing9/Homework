// Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.

let price1Phone = 119.95 * 30;
let tax = (5 * price1Phone) / 100;

console.log("30 phones cost", price1Phone, "\n", "With applied tax of 5%, 30 phones cost", tax + price1Phone);