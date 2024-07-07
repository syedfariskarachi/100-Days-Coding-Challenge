// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum Vehicles {
  cars,
  trucks,
  motorcycles,
}
// Showing one type of vehicle from list
console.log(Vehicles.cars); // It show 0
// Here,we're just checking what number the car category got in our list.

// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
interface Student {
  name: string;
  age: number;
  courses: string[];
}
// student 1 information
let student1: Student = {
  name: "faris",
  age: 18,
  courses: ["Computer", "Math", "Physics"],
};
console.log(student1);

// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape = {
  kind: "circle" | "rectangle";
  radius?: number; // only for circle
  width?: number; // only for rectangle
  height?: number; // only for rectangle
};
let circle: Shape = {
  kind: "circle",
  radius: 6,
};

let rectangle: Shape = {
  kind: "rectangle",
  width: 20,
  height: 30,
};
