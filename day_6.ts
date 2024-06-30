// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guest:string[] = ["rehman","azeeem","hameed"]
console.log(guest)  
guest.push("hassan")   // adding item in end of the array
guest.unshift("naveen")  //adding item at start of the array
guest.splice(1,1,"faris")
guest.forEach(guest=>{
    console.log(`Assalam o alaikom ${guest}, would you like to join me for dinner `)
})

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

while(guest.length>2){           //check guest array untill its not equal to 2 
    let remove_guest= guest.pop()    // remove array items untill items not equal to 2
    console.log(`sorry, ${remove_guest} i can't invite you for dinner. `)     
}
guest.forEach(guest=>{
    console.log(`Asalam o alaikom ${guest}, you are still invited to dinner.`)
})

// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let fav_places :string[] =["Newyourk","Turkey","Japan","Norway","India"]
console.log("Original Array",fav_places)
console.log("Alphabatic order",fav_places.sort())
console.log("Original Aray",fav_places)
console.log("Revers order",fav_places.reverse())
console.log("Original Array",fav_places)
console.log("Alphabatic Reverse order",[...fav_places].sort().reverse())
