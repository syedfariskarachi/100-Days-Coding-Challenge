// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

function Variables() {
  let fruit = "mango";
  console.log(fruit);
  fruit = "banana";
  console.log(fruit);
}
Variables();

// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function Swapping_variables() {
  let a = 5;
  let b = 10;
  console.log(`Before swap: a = ${a} ,b = ${b}`);
  let update_a = a; // Assigning value of a(10) in new variable
  a = b; // Assigning value of a = b(5)
  b = update_a; // Assigning value of b = update_a(a = 5)
  console.log(`After swap: a = ${a} ,b = ${b}`);
}
Swapping_variables();

// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

function use_compound_operators() {
  let x = 9;
  console.log(`Initial x: ${x}`);
  x += 3;
  console.log(`After addition of 3: x = ${x} `);
  x -= 3;
  console.log(`After subtraction of 3: x = ${x}`);
  x *= 3;
  console.log(`Arter multiplying by 3: x = ${x}`);
  x /= 3;
  console.log(`After deviding by 3: x = ${x}`);
}
use_compound_operators()

