import Building from './5-building';

// Create a class called SkyHigh that extends Building
export default class SkyHigh extends Building {
  constructor(sqft, floors) {
    // Call the constructor of the Building class
    super(sqft);
    this._floors = floors;
  }

  // Create a getter called floors
  get floors() {
    // Return the private property _floors
    return this._floors;
  }

  // Create a setter called floors
  set floors(value) {
    // Check if the value is a positive integer
    this._floors = value;
  }

  // Create a method called evacuationWarningMessage()
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
