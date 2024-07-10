// Question 100: Use the JavaScript Math object to find the square root of 144.
console.log(Math.sqrt(144));

// Question 101: Generate a random integer between 1 and 10.
function generate_random_number(num1:number,num2:number):number{
    return Math.floor(Math.random() * num2)+num1
}
console.log(generate_random_number(1,10))  // output B\W 1 to 10
console.log(generate_random_number(1,20))  // output B\W 1 to 20

// Question 102: Calculate and log the absolute difference between the number -5 and 5.
const difference:number = Math.abs(-5 - 5)  // output 10
console.log(difference)