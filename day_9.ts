// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
let alien_color: string = "green";
if (alien_color == "red") {
  console.log("you earn 5 points!");
}
if (alien_color == "black") {
}

// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
let alien_color_2 = "blue";
//run  if block
if (alien_color_2 == "blue") {
  console.log("You just earned 15 points!");
} else {
  console.log("you just earned 5 points!");
}
// run else block
let alien_color_3 = "yellow";
if (alien_color_3 == "blue") {
  console.log("you just earned 15 points!");
} else {
  console.log("you just earn 10 points!");
}

// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

let alien_color_red = "red";
if (alien_color_red == "red") {
  console.log("you just earned 5 points!");
} else if (alien_color_red == "yellow") {
  console.log("you just earned 10 points!");
} else if (alien_color_red == "blue") {
  console.log("you just earned 15 points!");
}
let alien_color_yellow = "yellow";
if (alien_color_yellow == "yellow") {
  console.log("you just earned 10 points!");
} else if (alien_color_yellow == "red") {
  console.log("you just earned 5 points!");
} else if (alien_color_yellow == "blue") {
  console.log("you just earned 15 points!");
}
let alien_color_blue = "blue";
if (alien_color_blue == "blue") {
  console.log("you just earned 15 points!");
} else if (alien_color_blue == "red") {
  console.log("you just earned 5 points!");
} else if (alien_color_blue == "yellow") {
  console.log("you just earned 10 points!");
}
