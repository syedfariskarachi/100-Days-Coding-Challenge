// Question 37: Large Shirts: Default values in make_shirt().

function make_shirts(size: string = "large", massage: string = "code is life") { // Assigning default perameter
  
  console.log(
    `Size of your shirt is ${size} with the massage ${massage} printed on it.`  // print 
  );
}
make_shirts("medium", "learning typescript"); //call make_shirts function

// Question 38: Cities: Describing cities with a function.

function cities(city:string = "karachi",country:string="pakistan"){
    console.log(`${city} is in ${country}`)
}
cities() // print default perameter
cities("dhaka","Bangladesh") 

// Question 39: City Names: Formatting city-country pairs.

function city_country(City:string,Country:string){
    return `${City},${Country}`
}
city_country("karachi","pakistan")
city_country("Dehli","India")
city_country("Tokyo","Japan")
