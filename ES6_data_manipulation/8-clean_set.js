/*
  8-clean_set.js

  Function that returns a string of all the set values that start with a specific string.
*/

export default function cleanSet(set, startString) {
  // Check if the set is a `Set` obj and `startString` is a str
  if (startString && typeof startString === 'string') {
    // Iterate over the set and push the values that start with the `startString`
    const values = [];
    for (const item of set) {
      // Check if the item starts with the `startString`
      if (item.startsWith(startString)) {
        // Push the item to the strings array
        values.push(item.slice(startString.length));
      }
    }
    // Return the strings array joined by a hyphen
    return values.join('-');
  }
  // Return an empty string if the set is not a `Set` obj or `startString` is not a str
  return '';
}
