/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’
 names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() 
 with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/


 // Function to modify magician names by adding "the Great"
function make_great(names: string[]): string[] {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i] + " the Great";
    }
    return names; // Return the modified array
}

// Function to display names of magicians from an array
function show_magicians(names: string[]) {
    names.forEach(name => {
        console.log(name);
    });
}
// Array of magician names
let magician_names = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo (Steven Frayne)", "Derren Brown"];

// Create a copy of the magician_names array
let copy_magician_names = magician_names.slice();

// Modify the copy of the magician names
let copy_great_magicians = make_great(copy_magician_names);

// Display the original magician names (modified in place)
console.log("Original magicians");
show_magicians(magician_names);

// Display the modified copy of magician names
console.log("Copy of magicians (with 'the Great'):");
show_magicians(copy_great_magicians);

