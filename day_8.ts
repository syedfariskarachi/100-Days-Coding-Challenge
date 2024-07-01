// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let array:string[]=["zeeshan","haris","zaman","faizan"]
console.log(array[5])  // Intention error: Arrays are zero indexed , index 5 is out of index value show (undefined)
console.log(array[2])  // print 3rd item of the array 

// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let name:string="Faris Shah"
console.log("Name : Yaseen Shah ;",name=="Yassen Shah")  //false
console.log("Name : Faris Shah ;",name=="Faris Shah")
let city:string ="Karachi"
console.log("City : Lahore ;",city=="Lahore")   //false
console.log("City : Karachi ;",city=="Karachi")  //true
let age:number = 18
console.log("Age : 23 ;",age==23)  //false
console.log("Age : 18 ;",age==18)  //true
let class_:string="xi"
console.log("class : x ;",class_=="x")  //false
console.log("class : xi ;",class_=="xi") //true
let roll_number:number=90665
console.log("Roll number : 11654 ;",roll_number==11654)  //false
console.log("Roll number : 90665 ;",roll_number==90665)  //true

// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

//equlity with string
console.log("Testing Equlity with string:","PUBG"=="PUBG")  //true
console.log("Equlity with string:",12==12)  //true
//numerical test
console.log("Numerical Test:",7>10) //false
console.log("Numerical Test:",3<4)  //true
// and(&&) or(|) test
console.log(true&&false)  //false
console.log(true||false)  //true
//test item is in a array
let car:string[] = ["Toyota","Audi","BMW","Honda"]
console.log(car.includes("Ferari" ))  //false
console.log(car.includes("BMW"))   //true
//test item is not in a array
console.log(!car.includes("Bently"))  //true
