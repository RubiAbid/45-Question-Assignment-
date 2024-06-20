/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person 
  will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/


// Array of current users
let current_users: string[] = ['simran', 'khadija', 'amna', 'amber', 'saba'];
// Array of new users to check
let new_users: string[] = ['faiza', 'aliya', 'saba', 'amna', 'asiya'];
// Loop through each new user
new_users.forEach(new_User => {
  // Check if the new user already exists in the current users array (case insensitive)
  let newCondition = current_users.some(currentuser => currentuser.toLowerCase() === new_User.toLowerCase());
 // If the new user exists, print a message saying they already exist
  if (newCondition) {
    console.log(`This ${new_User} already exists.`);
  } 
  // If the new user does not exist, print a message saying they are available
  else {
    console.log(`This ${new_User} is available.`);
  }
});
