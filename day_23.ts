// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function add_number_and_string(number1:number,number2:string):number{
    return number1 + Number(number2)
}
console.log(add_number_and_string(3,"6"))

// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiply_decimals(num1:number,num2:number):number{
    // Multiply the numbers and round the result to two decimal places.
    return Math.round((num1*num2)*100)/100
}
console.log(multiply_decimals(0.23,0.443))

// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divide_and_remainder(dividend:number,divisor:number){
    let quotient =Math.floor(dividend/divisor)
    let remainder =dividend%divisor
    return {quotient,remainder}
}
console.log(divide_and_remainder(2,57))