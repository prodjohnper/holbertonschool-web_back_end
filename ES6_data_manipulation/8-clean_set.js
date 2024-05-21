/*
  8-clean_set.js

  Function that returns a string of all the set values that start with a specific string.
*/

export default function cleanSet(set, startString) {
  // Check if the first argument is a `Set`
  if (!(set instanceof Set)) {
    // Throw an error if the first argument is not a `Set`
    throw new Error('First argument must be a Set');
  }

  // Check if the second argument is a string
  if (typeof startString !== 'string') {
    // Throw an error if the second argument is not a string
    throw new Error('Second argument must be a string');
  }

  // Filter the set values that start with the specific string
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  // Remove the specific string from the filtered values
  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));

  // Return the values joined by a `-`
  return cleanedValues.join('-');
}
