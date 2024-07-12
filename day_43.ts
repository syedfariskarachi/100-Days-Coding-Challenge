// /Question 127: Convert a traditional function expression to an arrow function.
//                traditional function
const traditional_function = function (a, b) {
    return a + b;
  };
  
  //                convert traditional to arrow function
  
  const arrow_function = (a, b) => a + b;
  
  console.log(traditional_function(5, 8)); // output 13
  console.log(arrow_function(5, 8)); // output 13
  
  // Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
  
  const multiple_perameter = (...num: number[]) => {
    return num.reduce((total, number) => total * number, 1);
  };
  console.log(multiple_perameter(1, 1, 2, 5));
  
  // Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
  
  const object = {
      key: "Value",
      traditional_function: function () {
        return `Traditional function ${this.key}`;
      },
      arrow_function:():void=>{
        console.log("Arrow function ", object.key);
      },
    };
    console.log(object.traditional_function())
    object.arrow_function()
    