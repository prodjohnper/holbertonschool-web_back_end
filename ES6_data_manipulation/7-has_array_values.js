/*
  7-has_array_values.js

  Function that returns a boolean if all the elements in the array exist within the set.
*/

export default function hasValuesFromArray(set, array) {
  // Check if the first argument is a `Set`
  if (!(set instanceof Set)) {
    // Throw an error if the first argument is not a `Set`
    throw new Error('First argument must be a Set');
  }

  // Check if the second argument is an array
  if (!Array.isArray(array)) {
    // Throw an error if the second argument is not an array
    throw new Error('Second argument must be an array');
  }

  // Return a boolean if all the elements in the array exist in the set
  return array.every((element) => set.has(element));
}
