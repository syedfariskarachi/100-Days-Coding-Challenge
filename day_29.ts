// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function position_of_sub_string(a: string) {
  return a.indexOf("learn");
}
console.log(
  position_of_sub_string(`Would you like to learn some typescript code today.`)
);

// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function check_text(str: string) {
  if (str.includes("typescript")) {
    return true;
  } else {
    return false;
  }
}
console.log(check_text(`Today i completed 10 exercise on typescript.`));
console.log(check_text(`Hello; my name is faris`));

// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function Substring(str: string) {
  return str.substring(0, 8);
}
console.log(Substring(`Today i completed 10 exercise on typescript.`));
