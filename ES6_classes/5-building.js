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
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new Error('sqft must be a number');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
