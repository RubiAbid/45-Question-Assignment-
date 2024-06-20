/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
let ten=10;
let fruits:string[]=['banana','lichi','chiku'];
let personname: string = "MAIRA";
console.log("Tests for equality and inequality with strings");
console.log(personname == "MAIRA"); // True
console.log(personname == "Sana"); // False
console.log("Tests using the lower case function");
console.log(personname.toLowerCase()=="maira")
console.log("Numerical Test")
console.log(24>22)
console.log(21>=22)
console.log("Tests using 'and' and 'or' operators");
console.log(ten > 0 && ten !=12); // Strict comparison with number and string
console.log("Test whether an item is in a array")
console.log(fruits.includes("lichi"))
console.log("Test whether an item is not in a array")
console.log(!fruits.includes("mango"))









