// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

let guests: string[] = [
  "rehman",
  "azeeem",
  "hameed",
  "hammad",
  "farhan",
  "hassan",
  "usman",
  "osama",
  "haseeb",
];
for (let i = 0; i < guests.length; i++) {
  const element = `Assalam o aliakom ${guests[i]}, we had ${guests.length} guests over for dinner `;
  console.log(element);
}

// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let array: string[] = [
  "K2",
  "Atlantic Ocean",
  "Arabian Sea",
  "Karachi",
  "Nepal",
  "India",
];
console.log(array);

// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Typescript Object
let student = {
  name: "faris",
  age: 18,
  class: "xi",
  roll_number: 90665,
};

console.log(
  `Student name: ${student.name}\nStudent age: ${student.age}\nclass: ${student.class}\nroll number: ${student.roll_number}`
);
