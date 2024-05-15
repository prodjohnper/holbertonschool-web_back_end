/*
    4-user-promise.js

    Return a resolved promise with an obj
*/

// Function to return a resolved promise with an obj
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    // Object with firstName and lastName
    firstName,
    lastName,
  });
}
