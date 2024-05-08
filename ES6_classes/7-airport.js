export default class Airport {
  constructor(name, code) {
    // Check if name is a string
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    // Check if code is a string
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new Error('Code must be a string');
    }
  }

  // Create a getter called name
  get [Symbol.toStringTag]() {
    // Return the airport code
    return `${this._code}`;
  }
}
