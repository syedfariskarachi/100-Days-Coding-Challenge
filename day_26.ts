// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function add(num1: number, num2: number) {
  return num1 + num2; // return the addition of 2 perameter
}
console.log(add(2, 3));

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function say_hello(name: string = "Anonymous") {  //store an defualt name
  return `Hello ${name}, would you like to learn some typescript today.`;
}
console.log(say_hello());
console.log(say_hello("hassan")); //take name (hassan) as aperameter

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.


// Declarations function
function sqauring(num:number){
    return num*2
}
// Expression function 
const squaring2 = function(num:number){
    return num*2
}

console.log(sqauring(2))
console.log(squaring2(2))