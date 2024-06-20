/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love 
TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/


// Function to create a shirt with a specified size and text
function make_shirt(size: string = "large", text: string = "I love Typescript") {
    // Print out the shirt's size and text
    console.log(`Your shirt size is ${size} with ${text} written on it`);
}

// Call the function with default parameters
make_shirt();

// Call the function with a custom size, default text
make_shirt("Medium");

// Call the function with custom size and text
make_shirt("Small", "I love Programming");
