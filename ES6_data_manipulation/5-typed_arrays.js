/*
  5-typed_arrays.js

  Function that returns a new `ArrayBuffer` with an `Int8` value at a specific position.
*/

export default function createInt8TypedArray(length, position, value) {
  // Check if length is a number
  if (position < 0 || position >= length) {
    // Return an empty array if one of the conditions is not met
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length); // Create a new `ArrayBuffer` with the specified length
  const int8View = new Int8Array(buffer); // Create a new `Int8Array` with the `ArrayBuffer`
  int8View[position] = value; // Set the value at the specified position

  // Return the `DataView` of the `ArrayBuffer`
  return new DataView(buffer);
}
