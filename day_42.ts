"use strict";
// /Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
Object.defineProperty(exports, "__esModule", { value: true });
let myself = {
    name: "faris",
    age: 20,
    get_name: function () {
        return this.name;
    },
};
console.log(myself.get_name());
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
const student = {
    name: "hassan",
    age: 16,
    roll_number: 2209,
    student1: function () {
        return `Student name:${this.name}.\nStudent age:${this.age}\nStudent roll number:${this.roll_number}`;
    },
};
console.log(student.student1());
// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
const object = {
    property: "value",
    outerMethod: function () {
        console.log(this.property);
        const innerMethod = () => {
            console.log(this.property);
            innerMethod();
        };
    },
};
object.outerMethod();
