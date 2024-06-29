// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

let my_name = "faris"; //save information
let my_age = 18;     //save information
//  this is an simple program shows information about me   // adding comment
console.log(`My name is ${my_name} and my age is ${my_age}`)

// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

let friends_name :string[]=["nabeel","usman","ahmer","rohan"]   // store name of friends
for (let i = 0; i < friends_name.length; i++) {
    const element = friends_name[i];
    console.log(element)                   //print each name
    
}

// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

for (let i = 0; i < friends_name.length; i++) {
    const element = ` Hello ${friends_name[i] }, What's going on `;
    console.log(element)
    
}
