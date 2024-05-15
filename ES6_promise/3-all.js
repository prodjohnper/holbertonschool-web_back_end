/*
    3-all.js

    Collectively resolve all promises
*/

// Import promises from utils.js
const { uploadPhoto, createUser } = require('./utils');

// Function that handles promises collectively
export default function handleProfileSignup() {
  // Return a promise
  return Promise.all([uploadPhoto(), createUser()])
    // Handle the response
    .then((results) => {
    // Destructure the results
      const profilePicture = results[0].body;
      const name = results[1].firstName;
      const { lastName } = results[1];
      // Log the results to the console
      console.log(`${profilePicture} ${name} ${lastName}`);
    })
    // Handle the error
    .catch(() => {
    // Log the error to the console
      console.log('Signup system offline');
    });
}
