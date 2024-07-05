// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function hobbies(...hobby: string[]) {
  console.log(`My hobbies are ${hobby}`);
  //     hobbies.forEach(hobby=>{
  //         console.log(`I enjoy ${hobby}`)
  //     })
  hobby.forEach((a) => {
    console.log(`I like ${a} in free time.`);
  });
}
hobbies("playing cricket", "reading books", "gaming");

// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

let my_self:string=`My name is faris;
I read in class 11.
Now a days i lerned typescript.`
console.log(my_self)

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// calculate the area of rectangle
function rectangle_area(width:number,height:number):number{            
    return width*height  
}
// Refactor in array into arrow function 
let refactor_in_array =(width:number,height:number):number =>{
  return width*height
}
console.log("Area of rectangle:",rectangle_area(2,4))
console.log("Refactored array :",refactor_in_array(2,4))

