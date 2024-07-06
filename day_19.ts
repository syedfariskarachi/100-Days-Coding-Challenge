// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

//    twice of number by function
let double_number = (...array) => {
  array.forEach((arra) => {
    console.log(`${arra * arra}`);
  });
};
double_number(2, 5, 7, 8);
//
let array: number[] = [2, 4, 7, 9, 5];

let double_number2 = array.map((number) => number * 2); // used for create a new array by existing array.
console.log(double_number2);

// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixed_array = [2, "faris", 34, "r", 5, true, undefined, "boss", false];
let string_array = mixed_array.filter(str=> typeof str=="string")
console.log(string_array)

// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades=[17,21,84,97]
let average_grade = grades.reduce((total,grade)=>total+grade)/grades.length
console.log(average_grade)

