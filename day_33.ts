// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function get_current_date(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Adds 1 because months are 0-indexed
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
}

console.log(get_current_date());

// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function days_untill_new_year(): number {
  const today = new Date();
  const newYear = new Date(today.getFullYear() + 1, 0, 1);
  const timeUntilNewYear = newYear.getTime() - today.getTime();

  const daysLeft = Math.floor(timeUntilNewYear / (1000 * 60 * 60 * 24)); // Convert the time difference from milliseconds to days and round down to the nearest whole number
  return daysLeft;
}
console.log(days_untill_new_year(), "days until new year");

// Question 99: Generate a date object representing your next birthday and log it to the console.

function get_birthday_date(month: number, day: number): Date {
  const today = new Date();
  let year = today.getFullYear();
  const birthday = new Date(year, month - 1, day);
  if (birthday < today) {
    birthday.setFullYear(year + 1);
  }return birthday
}
const next_birthday =get_birthday_date(9,17)


console.log(`Next birthday on ${next_birthday.toLocaleDateString()}`)