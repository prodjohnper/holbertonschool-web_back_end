export default class HolbertonClass {
  constructor(size, location) {
    // Check if size is a number
    if (typeof size === 'number') {
      // Set the private property _size
      this._size = size;
    } else {
      // Throw an error
      throw new Error('size must be a number');
    }
    // Check if location is a string
    if (typeof location === 'string') {
      // Set the private property _location
      this._location = location;
    } else {
      // Throw an error
      throw new Error('location must be a string');
    }
  }

  // Symbol method to return the location or size
  [Symbol.toPrimitive](type) {
    // Check if type is a string
    if (type === 'string') return this._location;
    // Return the size
    return this._size;
  }
}
