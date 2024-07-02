// Question 31: No Users: Ensure your user list isn’t empty.

let user: string[] = [];
if (user.length === 0) {
  console.log(`Today, ${user.length} users have logged out`);
} else {
  console.log(`Today, ${user.length} users have created new accounts`);
}


// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let users: string[] = ["user1", "user2", "Faris", "user3", "user4"];
let new_users: string[] = [
  "faris",
  "user1",
  "user2",
  "user3",
  "Hassan",
  "user5",
];
new_users.forEach((newusers) => {
  if (
    users.some(
      (existingUser) => existingUser.toLowerCase() === newusers.toLowerCase()
    )
  ) {
    console.log(`${newusers}, please enter a new user name.`);
  } else {
    console.log(`${newusers} is available.`);
  }
});

// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
let number: number[] = [1, 2, 3, 4, 6, 8];
number.forEach((number) => {
  let suffix = "o";
  if (number == 1) {
    suffix = "st";
  } else if (number == 2) {
    suffix = "nd";
  } else if (number == 3) {
    suffix = "rd";
  } else if (number == 4) {
    suffix = "rth";
  } else if (number <= 10) {
    suffix = "th";
  }
  console.log(`${number}${suffix}`);
});
