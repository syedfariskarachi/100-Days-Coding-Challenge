// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
import { show_magicians } from "./day_14";
let magician: string[] = ["John", "Bob", "Alice"];
function call_magician(magician: string[]) {
  let great_magician = [];
  magician.forEach((magicians) => {
    great_magician.push(`${magicians} the great`);
  });
  return great_magician;
}
let great_magician = call_magician(magician.slice());
console.log("Original Array");
show_magicians(magician);
console.log("Great array ");
show_magicians(great_magician);

// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwitch(...ingredients: string[]) {
  console.log(`Making a sandwitch with ${ingredients.join(", ")}.`);
}
make_sandwitch("chicken", "cheese");
make_sandwitch("ham", "cheese", "tomoto", "mayo");

// Question 45: Cars: Create detailed car objects with flexible properties.

let car:{name:string,model:number,color:string,Horse_power?:string}={
    name:"Toyota",
    model:2020,
    color:"Black",
    Horse_power:"1400cc"
}
console.log(car)
console.log(`Color of my car is ${car.color}.`)