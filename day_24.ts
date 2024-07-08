// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function use_of_let_in_loops() {
  let num = 5; // let keyword is use for store our data in varible
  for (let i = 1; i <= num; i++) {
    const element = i;
    console.log(element);
  }
}

use_of_let_in_loops();

//  Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
function name() {
  let name = "faris";
  if (true) {
    let name2 = "hassan";
    console.log(name2);
  }
  console.log(name); //
}

name();
{
  let blocklet = "Visible inside the block";
  const blockconst = "visible inside the block";
  console.log(blocklet)
  console.log(blockconst)
} 
 //       try in javascript file
// try {
//     console.log(blocklet)
// } catch (error) {
//     console.log("'block let'  is not accessible outside the block.")
// }
// try {
//     console.log(blockconst)
// } catch (error) {
    // console.log("'block const'  is not accessible outside the block.") 
    
// }