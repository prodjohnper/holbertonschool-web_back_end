/*
    2-then.js

    Return a promise with 3 handlers
*/

// Function that returns a promise
export default function handleResponseFromAPI(promise) {
  // Return a promise
  return promise
    // Handle the response
    .then(() => {
      // Log the response to the console
      console.log('Got a response from the API');
      // Return a status code of 200 and a body of 'success'
      return {
        status: 200,
        body: 'success',
      };
    })
    // Handle the error
    .catch(() => {
      // Log the error to the console
      console.log('Got a response from the API');
      // Return empty error obj
      return new Error();
    });
}
