// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

// let combine_string_and_array=(text:string,number:number)=>({
//     return text+number
// })

function combine_string_and_number(text:string,number:number):string{
    return text+number
}
console.log(combine_string_and_number("add:",20))

// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function remainder(a:number,b:number){
    return a%b
}
console.log(remainder(5,2))

// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function check_boolean(a:boolean,b:boolean){
    return true&&true
}
console.log(check_boolean(true,false))