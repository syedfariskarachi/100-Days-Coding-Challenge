// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

const countries = new Map<string, string>();
countries.set("Pakistan", "Islamabad");
countries.set("Japan", "Tokyo");
countries.set("USA", "Washington D.C");
console.log(countries);

// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function check_map_contain_key(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  } else {
    console.log(`Canada is not in the map.`);
  }
}
check_map_contain_key(countries);

// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

const student = new Map<number, string>();
student.set(1, "Faris");
student.set(2, "Hassan");
student.set(3, "Zaman");

student.forEach((name, id) => {
  console.log(`Student ID:${id},Name:${name}`);
});
