// Question 118: Write a loop that logs numbers from 1 to 10 to the console.

for (let i = 1; i < 11; i++) {
    console.log(i)
    
}

// Question 119: Create a while loop that logs "Hello, World!" 5 times.

let num = 0
while (num<5) {
    console.log(num,"Hello world")  // start from 0
    num++    
}

// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

let fav_movies:string[]=["Godfather","Interstellar","3 Idiot","Inception"]
for (const movie of fav_movies) {
    console.log(movie)

    
}