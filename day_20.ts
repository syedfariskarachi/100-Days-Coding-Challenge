// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average
let average=(...score)=>{
    let average_score =score.reduce((sum,score)=>sum+score,0);
    return average_score/score.length
}
console.log(average(1,2,4,6,34,5))

// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function adder(value_to_add:number):(number)=>number{
    return function(number:number):number{
        return number+value_to_add
    }
}
let firstadder = adder(6)
console.log(firstadder(20))

// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let user_profile=(function(){
    let user_name="faris"
    let user_age =18
    return{
        displayinfo:function(){
            console.log(`User name:${user_name}\nUser age:${user_age}`)
        }
    }
})();
user_profile.displayinfo()