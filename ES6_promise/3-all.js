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
      const [photo, user] = results;
      // Log the results to the console
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
  // Handle the error
    .catch(() => {
    // Log the error to the console
      console.log('Signup system offline');
    });
}
