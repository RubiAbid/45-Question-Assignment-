/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter
 that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
  Call the function three times, using a different number of arguments each time.*/
// Function to create a sandwich with a variable number of items
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // Print a message indicating the start of sandwich making
    console.log("Making a sandwich with the following items:");
    // Iterate through the items array and print each item
    items.forEach(function (add) { return console.log(add); });
    // Print a message indicating the sandwich is ready
    console.log("Enjoy your sandwich!");
}
// Call the sandwich function with a variety of ingredients
sandwich("Bread", "egg", "kabab", "mayo", "ketchup");
sandwich("bun", "tomatoes", "cucumber", "mayo", "ketchup");
sandwich("Bread", "mayo", "black pepper");
