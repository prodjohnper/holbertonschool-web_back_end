export default class Airport {
  constructor(name, code) {
    // Check if currency is a string
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('Airport name and code must be strings');
    }
    this._name = name;
    this._code = code;
  }

  // Create a getter called name
  get [Symbol.toStringTag]() {
    // Return the airport code
    return `${this._code}`;
  }
}
