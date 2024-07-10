// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.const new
const current_time = new Date();
if (current_time.getHours() < 12) {
  console.log("Good Morning");
}

// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function get_grade(num: number) {
  if (num >= 80) {
    console.log("A Grade");
  } else if (num >= 70) {
    console.log("B Grade");
  } else if (num >= 60) {
    console.log("C Grade");
  } else if (num >= 50) {
    console.log("D Grade");
  } else if (num <= 49) {
    console.log("Fail");
  }
}
get_grade(56);
get_grade(90);
get_grade(67);

// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function age_group(age: number) {
  if (age < 13) {
    return "child";
  } else if (age < 19) {
    return "Teenager";
  } else if (age > 20) {
    return "Adult";
  }
}
console.log(age_group(12));
console.log(age_group(25));
console.log(age_group(16));
