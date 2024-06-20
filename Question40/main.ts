/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an
 artist name and an album title, and it should return a Object containing these two pieces of information. Use the function 
 to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album 
 information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
 If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function 
 call that includes the number of tracks on an album.*/

// Function to create an album object with optional track number
function make_album(artist: string, title: string, track?: number) {
    // Define an album object with mandatory artist and title properties
    let album: { artistname: string, titlename: string, track?: number } = {
        artistname: artist,
        titlename: title,
    };

    // Check if track number is provided (not undefined)
    if (track !== undefined) {
        album.track = track; // Assign track number to album object if provided
    }

    return album; // Return the created album object
}
// Create albums using the make_album function
let album1 = make_album("asim", "Bematlab", 7);
let album2 = make_album("atif", "doorie", 16);
let album3 = make_album("BTS", "Map of the Soul: 7");
// Output the created albums to the console
console.log(album1);
console.log(album2);
console.log(album3);
