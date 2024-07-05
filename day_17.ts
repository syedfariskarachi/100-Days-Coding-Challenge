// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function hobbies(...hobby:string[]){
    console.log(`My hobbies are ${hobby}`)
//     hobbies.forEach(hobby=>{
//         console.log(`I enjoy ${hobby}`)
//     })
    hobby.forEach(a => {
        console.log(`I like ${a} in free time.`)
    });
}
hobbies("playing cricket","reading books","gaming")


