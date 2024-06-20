//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
//several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehicle = ['honda', 'yamaha', 'tesla', 'toyota', 'civic'];
for (var i = 0; i <= 4; i++) {
    console.log("i would like to own a ".concat(vehicle[i], " car"));
}
