// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

export function sum(num1:number,num2:number){   // export function from this file
    return num1 + num2
}
console.log(sum(2,4))