"use strict";
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
//
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 0; i < 11; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
for (let i = 10; i > 0; i--) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
function vowel_found(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char);
    }
}
vowel_found("cricket");
