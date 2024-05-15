/*
    5-photo-reject.js

    Function that accepts one arg 'fileName'.
    The function returns a promise rejecting with an
    Error and the str '$fileName cannot be processed'
*/

// Function that returns a promise that rejects with an Error
export default function uploadPhoto(fileName) {
  // Return a rejected promise
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
