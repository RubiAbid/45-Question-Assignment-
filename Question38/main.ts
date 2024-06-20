/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print
 a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for
  three different cities, at least one of which is not in the default country.*/


 // Function to describe a city and the country it is in
function describe_city(city: string, country: string = "Korea") {
    // Print out the city and country information
    console.log(`${city} is in ${country}`);
}

// Call the function with "Busan", using the default country
describe_city("Busan");

// Call the function with "Seoul", using the default country
describe_city("Seoul");

// Call the function with "Paris", specifying the country as "France"
describe_city("Paris", "France");
