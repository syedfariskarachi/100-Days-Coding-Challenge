// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
let words: string[] = ["Hello world", "Typescript", "Javascript"];
let check_length = words.map((word) => word.length);

console.log(check_length); // Output: [11, 10, 10]

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function number_greter_then_10(str: number[]) {
  return str.filter((num) => num > 10);
}
let numbers = [8, 3, 12, 10, 12, 19, 16]; // returns [12,12,19,16]
console.log(number_greter_then_10(numbers));

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculate_sum(numbers: number[]) {
  return numbers.reduce((total, num) => total + num, 0);
}
let numbers2 = [1, 3, 4, 5, 9, 10];
console.log(calculate_sum(numbers2));
