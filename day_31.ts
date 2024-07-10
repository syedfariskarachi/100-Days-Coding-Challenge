// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
let fruit: string[] = ["Mango", "Banana", "Apple"];
console.log(fruit); // before adding new fruit
fruit.push("Strawberry", "Gava");
console.log(fruit); // after adding new fruit

// Question 92: Write a function to remove the last element from an array and return the removed element.

// used Question 91:
function remove_last_element(array) {
  array.pop(); // remove the last element from fruit
  console.log(array); // after removing)
}
remove_last_element(fruit)

// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replace_banana_with_mango(fruits:string[]){
    const index =fruits.indexOf("Banana");
    if(index !== -1)fruits[index] = "Mango";
}
const fruits :string[]=["Apple", "Banana", "cherry"] 
replace_banana_with_mango(fruits)
console.log(fruits)
