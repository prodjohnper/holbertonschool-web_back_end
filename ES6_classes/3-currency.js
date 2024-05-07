export default class Currency {
  constructor(code, name) {
    // Check if currency is a string
    if (typeof code === 'string') {
      this.code = code;
    } else {
      throw new TypeError('Currency must be a string');
    }

    // Check if value is a number
    if (typeof name === 'string') {
      this.name = name;
    } else {
      throw new TypeError('Value must be a string');
    }
  }

  // currency getter and setter
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // value getter and setter
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // displayFullCurrency method
  displayFullCurrency() {
    // Return the value and currency in the following format: value (currency)
    return `${this._name} (${this._code})`;
  }
}
