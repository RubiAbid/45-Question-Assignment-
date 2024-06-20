/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer
 and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information
  and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the 
  information was stored correctly.*/


  function car_info(manufacturer, model, ...options) {
    // Initialize the car object with mandatory properties
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
   // Loop through the optional properties
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
   // Return the constructed car object
    return car;
}
   // Create a car object with mandatory and optional properties
let car = car_info("Toyota", "Corolla", "Year:1996");
   // Output the car object to the console
console.log(car);
