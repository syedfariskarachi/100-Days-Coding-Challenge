// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

function round_to_nearest_integer(int: number) {
  return Math.round(int);
}
console.log(round_to_nearest_integer(3.9));
console.log(round_to_nearest_integer(3.2));

// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
//
let convert_string_to_number = (str: string) => {
  return parseFloat(str); // convert the string to number
};
console.log(convert_string_to_number(`2.23`));
console.log(convert_string_to_number(`3`));

// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

let check_variable_value_is_nan = (str: any): boolean => {
  return isNaN(str);
};
console.log(check_variable_value_is_nan("hello")); // return true
console.log(check_variable_value_is_nan(23)); //return false
