// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

function week_days(day_number: number) {
  switch (day_number) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;

    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day number.");
  }
}
week_days(3);

// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

function month(month: number): void {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log(`Winter`);
      break;
    case 3:
    case 4:
    case 5:
      console.log(`Spring`);
      break;
    case 6:
    case 7:
    case 8:
      console.log(`Summer`);
      break;
    case 9:
    case 10:
    case 11:
      console.log(`Autumn`);
      break;
    default:
      console.log(`Invalid Mounth`);
      break;
  }
}
month(3);

// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function defaultCase(roll_num: number): void {
  switch (roll_num) {
    case 112:
      console.log(`Date of your exam is 25 july`);
      break;
    case 113:
      console.log(`Date of your exam is 27 july`);
      break;
    case 114:
      console.log(`Date of your exam is 18 july`);
      break;
    case 115:
      console.log(`Date of your exam is 26 july`);
      break;
    default:
        console.log(`Wrong Roll Number`)
  }
}
defaultCase(113)
defaultCase(115)
defaultCase(123)