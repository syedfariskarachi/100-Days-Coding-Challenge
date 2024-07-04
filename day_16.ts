// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

import { describe } from "node:test";

let laptop = {
  make: "Dell",
  model: "Elitebook",
  year: 2014,
  describe: function () {
    console.log(`This laptop is ${this.make} ${this.model} ${this.year}. `);
  },
};
laptop.describe();

// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptop1 = {
  make: "hp",
  model: "ProBook",
  year: 2017,
};
let laptop2 = {
  make: "lenovo",
  model: "Thinkpad",
  year: 2020,
};
let laptops = [laptop, laptop1, laptop2];
console.log(laptops);
    // Make more easy 
let laptop_array = [
  { make: "hp", model: "ProBook", year: 2017 },
  { make: "lenovo", model: "Thinkpad", year: 2020 },
  { make: "Dell", model: "Elitebook", year: 2014 },
];
console.log(laptop_array)

// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let lap_1_price = [12000,20000,25000]
let lap_2_price =[37000,22000,16000]
let combined_price =[...lap_1_price,...lap_2_price].sort((a,b)=>a-b)
console.log(combined_price )
