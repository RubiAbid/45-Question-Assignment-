/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer
 and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information
  and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the
  information was stored correctly.*/
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize the car object with mandatory properties
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Loop through the optional properties
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    // Return the constructed car object
    return car;
}
// Create a car object with mandatory and optional properties
var car = car_info("Toyota", "Corolla", "Year:1996");
// Output the car object to the console
console.log(car);
