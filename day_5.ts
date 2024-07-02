// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation: string[] = ["honda", "toyota", "bmw", "aodi"];
// for each loop
transportation.forEach((transportation) => {
  console.log(`I would like to own a ${transportation}`);
});
// for loop
for (let i = 0; i < transportation.length; i++) {
  const element = ` I would like to own a ${transportation[i]}`;
  console.log(element);
}

// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let invited: string[] = ["rehman", "rameez", "shahid", "rashid"];
invited.forEach((invited) => {
  console.log(
    `Asalamo alaikom ${invited}, tomorow is birthday and you are invited with your family please join us on my birhtday. `
  );
});

// Question 15:

invited.pop();
invited.push("zeeshan", "sameer");
invited.unshift("hassan");
invited.forEach((invited) => {
  console.log(
    `Asalamo alaikom ${invited}, tomorow is birthday and you are invited with your family please join us on my birhtday. `
  );
});
