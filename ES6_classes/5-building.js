export default class Building {
  constructor(sqft) {
    // Check if the constructor is called with the new keyword
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      // Throw an error if the constructor is not called with the new keyword
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    // This is a private property
    this._sqft = sqft;
  }

  // sqft setter and getter
  get sqft() {
    // This is a private property
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
