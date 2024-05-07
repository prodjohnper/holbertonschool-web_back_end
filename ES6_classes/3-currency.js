export default class Currency {
  constructor(code, name) {
    // Check if currency is a string
    this._code = code;
    this._name = name;
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
