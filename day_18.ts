// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
let Mobile = {
  brand: "Tecno",
  model: "Spark 10",
  year: 2024,
  colors: ["Blue", "Black", "Silver", "Orange", "Purple"],
  specs: {
    battery_life: "3 hour plus",
    screen_size: "6.3 inch",
    storage: "128gb",
  },
};
console.log(Mobile);
console.log(
  `The battery life of ${Mobile.brand} ${Mobile.model} is ${Mobile.specs.battery_life}.`
);

// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let programing = {
  programing_language: ["Java", "Python", "C++"],
  tools: ["Git", "Docker", "Kubernates"],
  framework: ["Bootstrep", "Django", "React"],
};

console.log(programing)

// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

function object_with_dynamic_key(key:string,value:string){
    let dynamic_object={}
    // Setting up a section in the list with a changeable name
    dynamic_object[key]=value
    return dynamic_object
}
let user_preference =object_with_dynamic_key("theme","white")
console.log(user_preference)

