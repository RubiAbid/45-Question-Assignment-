//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var personName = "Nimra ahmed";
console.log("Uppercase:", personName.toUpperCase());
console.log("lowercase:", personName.toLowerCase());
console.log("titlecasecase:", personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); })); //char is just a name,we can write any name
