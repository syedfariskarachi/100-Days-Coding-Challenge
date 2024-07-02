// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

let pizzas:string[]=["BBQ Chicken","Vegetarian","Meat","Cheese"]

pizzas.forEach(pizzas=>{
    console.log(`${pizzas} Pizza, is my favorite kind of pizza.`)
})
console.log(`I like Pizza instead of sandwitch.`)

// Question 35: Animals: Highlight animals with a common trait.

let animals:string[]=["Lion","Tiger","Leopard"]
animals.forEach(animal=>{
    console.log(`${animal} is a wild animal.`)
})
console.log(`Humans are a species of animals.`)

// Question 36: T-Shirt: Create a function for customizing t-shirts.

const shirts=(shirt_size:string,massage)=>{
     console.log(`The size of your shirt is "${shirt_size}" and "${massage}" is printed on your shirt.`)

}
shirts("Medium","More you learn, more you earn")