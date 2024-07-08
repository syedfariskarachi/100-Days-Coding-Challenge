// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.

function str(string:string){
    return string.length
}
console.log(str("FarisShah"))

// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function conver_str(string:string){
    string = string.toLowerCase()    
    console.log(`LowerCase: ${string}`) 
    string = string.toUpperCase()
    console.log(`UpperCase: ${string}`)    
}

conver_str("FarisShah")

// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replace_text(sentence:string){
    return sentence.replace(/JavaScript/g,"TypeScript")
}
console.log(replace_text(`I love JavaScript and JavaScript is awesome!`))