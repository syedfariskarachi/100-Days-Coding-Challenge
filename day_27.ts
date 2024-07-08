// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

let car={
    make:"Toyota",
    model:"Hilux",
    year:2014,
    
} as any
console.log(car.model)

// Question 80: Updating Object property

car.year = 2019
car.color = "black"
console.log(car)

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

// we use exercise 79 object for this exercise.

function Obj_properties(object){
    for (const property in object) {

        console.log(`${property}: ${object[property]}`)
        }
    }
    
   
Obj_properties(car)

