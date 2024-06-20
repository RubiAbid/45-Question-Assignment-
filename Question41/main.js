/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints
the name of each magician in the array.*/
// Function to display names of magicians from an array
function show_magicians(names) {
    // Using forEach to iterate through each name in the array and print it
    names.forEach(function (name) {
        console.log(name);
    });
}
// Array of magician names
var magician_names = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo (Steven Frayne)", "Derren Brown"];
// Call the show_magicians function with the magician_names array
show_magicians(magician_names);
