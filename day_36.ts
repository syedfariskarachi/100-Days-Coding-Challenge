// Question 106: Determine if a given year is a leap year using comparison operators.

function is_leap_yaer(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(is_leap_yaer(2020));
console.log(is_leap_yaer(1900));

// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

function is_divisible_by_2_3(num: number): boolean {
  return num % 2 === 0 && num % 3 === 0;
}
console.log(is_divisible_by_2_3(20)); //output false
console.log(is_divisible_by_2_3(6)); //output true

// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

let check_two_string = (str1: string, str2: string): boolean => {
  return str1.toLowerCase() === str2.toLowerCase();
};
console.log(check_two_string("faris", "FAri")); // output false
console.log(check_two_string("faris", "Faris")); // output true
