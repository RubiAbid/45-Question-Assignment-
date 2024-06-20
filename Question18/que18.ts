/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


let favPlaces: string[] = ['Kashmir', 'Paris', 'Bali', 'Istanbul'];

// Display the original array
console.log("Original array:", favPlaces);

// Display the array sorted in alphabetical order without modifying the original array
console.log('Alphabetical order:', [...favPlaces].sort());

// Confirm the original array is still in its original order
console.log("Still in original order:", favPlaces);

// Display the array sorted in reverse alphabetical order without modifying the original array
console.log("Reverse alphabetical order:", [...favPlaces].sort().reverse());

// Confirm the original array is still in its original order
console.log("Still in original order:", favPlaces);

// Reverse the original array and display it
console.log("Original array reversed:", favPlaces.reverse());

// Reverse the array again to get back to the original order and display it
console.log("Back to original order:", favPlaces.reverse());

// Sort the original array into alphabetical order and display it
console.log("Sorting original array into alphabetical order:", favPlaces.sort());

// Sort the original array into reverse alphabetical order and display it
console.log("Sorting original array into reverse alphabetical order:", favPlaces.reverse());
