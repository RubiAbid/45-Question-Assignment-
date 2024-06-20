/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the
 array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
  actually been modified.*/

// Function to modify magician names by adding "the Great"
function make_great(names: string[]) {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i] + " the Great";
    }
}

// Function to display names of magicians from an array
function show_magicians(names: string[]) {
    names.forEach(name => {
        console.log(name);
    });
}

// Array of magician names
let magician_names = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo (Steven Frayne)", "Derren Brown"];

// Call make_great function to modify the magician_names array
make_great(magician_names);

// Call show_magicians function to display the modified magician names
show_magicians(magician_names);
