/*
    0-promise.js

    Return a promise using the prototype 'function getResponseFromAPI()'
*/

// Function that returns a promise
export default function getResponseFromAPI() {
  // Return a promise
  return new Promise((resolve, reject) => {
    // Define the data
    const data = true;

    // If data is true, resolve the promise
    if (data) {
      resolve('Promise resolved');
    } else {
      // If data is false, reject the promise
      reject();
    }
  });
}
