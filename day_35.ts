// Question 103: Write a function that returns a random boolean value, true or false.
function random_boolean(): boolean {
  return Math.random() > 0.5;
}
console.log(random_boolean());

// Question 104: Create a function that generates a random hexadecimal color code.
function get_random_haxadecimal_color(): string {
  const color =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  return color;
}
console.log(get_random_haxadecimal_color());

// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function roll_dice(): number {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(roll_dice())
