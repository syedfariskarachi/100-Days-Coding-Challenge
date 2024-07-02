// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age: number = 17;
if (age <= 3) {
  console.log("You are a Toddler");
} else if (age <= 5) {
  console.log("You are a Preschooler");
} else if (age <= 12) {
  console.log("You are a child");
} else if (age <= 20) {
  console.log("You are a Teenager");
} else if (age <= 39) {
  console.log("You are a Young Adult");
} else if (age <= 59) {
  console.log("You are a Middle Aged Adult");
} else if (age <= 60) {
  console.log("You are a Senior");
}


// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let fav_fruits: string[] = ["Apple", "Mango", "Banana", "Strawberry"];
if (fav_fruits.includes("Grapes")) {
  console.log("Enjoy the burst of flavor from every grape.");
} else if (fav_fruits.includes("Pineapple")) {
  console.log("Tropical and tangy, pineapples are a taste of paradise.");
} else if (fav_fruits.includes("Blueberry")) {
  console.log(
    "Add a handful of blueberries to your breakfast for a healthy boost."
  );
} else if (fav_fruits.includes("Watermelon")) {
  console.log("Stay hydrated with the juicy goodness of watermelon");
} else if (fav_fruits.includes("Apple")) {
  console.log("An apple a day keeps the doctor away.");
}

if (fav_fruits.includes("Mango")) {
  console.log("Lush and juicy, mangoes are the king of fruits");
}
if (fav_fruits.includes("Banana")) {
  console.log("Rich in potassium, bananas are great for muscle health");
}

// Question 30: Hello Admin: Greet users differently, especially 'admin'.
let admin: string[] = ["Faris shah", "user2", "user3"];

admin.forEach((admin) => {
  if (admin == "Faris shah") {
    console.log("Hello, Faris would you like to see Hamid Status report?");
  } else {
    console.log(`Hello ${admin}, thank you for logging again`);
  }
});
