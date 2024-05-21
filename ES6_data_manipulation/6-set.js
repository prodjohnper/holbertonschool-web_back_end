/*
  6-set.js

  Function that returns a `Set` from an array.
*/

export default function setFromArray(array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    // Throw an error if the input is not an array
    throw new Error('Input must be an array');
  }
  // Return a new `Set` from the array
  return new Set(array);
}
