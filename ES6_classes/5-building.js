export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this.sqft = sqft;
    } else {
      throw new Error('sqft must be a number');
    }
  }

  // sqft getter and setter
  get sqft() {
    // Return the value of _sqft
    return this._sqft;
  }

  set sqft(value) {
    // Check if value is a number
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
        // Throw an error if value is not a number
      throw new Error('sqft must be a number');
    }
  }

  // Static method to return error message
  static evacuationWarningMessage() {
    // Throw an error with the message
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
