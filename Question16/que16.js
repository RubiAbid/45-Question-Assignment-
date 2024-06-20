/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
•Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found
  a bigger dinner table.
•Add one new guest to the beginning of your array.
•Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
  Print a new set of invitation messages, one for each person in your list. */
var invitation = ['maham', 'waniya', 'sidra', 'faheella'];
var dontcome = invitation[1];
console.log(dontcome, "is not coming");
invitation.splice(1, 1, "ramsha");
console.log("Goof news i found a bigger dinner table");
invitation.unshift("suniya");
invitation.push("aliya");
var middleindex = Math.floor(invitation.length / 2);
invitation.splice(middleindex, 0, "urooj");
console.log("Updated list of guest");
invitation.forEach(function (oneguest) { return console.log("Hey ".concat(oneguest, " come to my place for dinner")); });
