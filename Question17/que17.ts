//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space 
//for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//•Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//•Print a message to each of the two people still on your list, letting them know they’re still invited.
//•Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

  
let invitation:string[]=['maham','waniya','sidra','faheella']
let dontcome=invitation[1];
console.log(dontcome, "is not coming")
invitation.splice(1,1,"ramsha")
console.log("Goof news i found a bigger dinner table")
invitation.unshift("suniya")
invitation.push("aliya")
let middleindex:number=Math.floor(invitation.length/2)
invitation.splice(middleindex,0,"urooj")
console.log("Updated list of guest")
invitation.forEach(oneguest=>console.log(`Hey ${oneguest} come to my place for dinner`))
console.log("new dinner table won’t arrive in time for the dinner,I can invite only two people for dinner")
while(invitation.length>2){
  let newlist=invitation.pop();
  console.log(`sorry ${newlist} I can't invite you to dinner`)
}
console.log("Invitation to last 2 guests")
invitation.forEach(newlist=>console.log(` Hey ${newlist} you are still invited to dinner`))
invitation.pop()
invitation.pop()
console.log(invitation)
