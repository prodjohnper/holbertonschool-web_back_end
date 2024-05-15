/*
    6-final-user.js

    */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Function that returns a promise that resolves with an array of objs
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array of promises
  const promises = [
    // Call the signUpUser function with the firstName and lastName
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  // Return a promise that resolves with an array of objs
  return Promise.allSettled(promises)
    // Map the results to an array of objs
    // Return obj with the status and value
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
