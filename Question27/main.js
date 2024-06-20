/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
//version1
var aliencolor = "green";
if (aliencolor === "green") {
    console.log("The player earned 5 points.");
}
else if (aliencolor === "yellow") {
    console.log("The player earned 10 points.");
}
else if (aliencolor === "red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Unknown alien color. No points earned.");
}
//version:2
var alienColor = "yellow";
if (alienColor === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Unknown alien color. No points earned.");
}
//version3
var alien_color = "red";
if (alien_color === "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Unknown alien color. No points earned.");
}
