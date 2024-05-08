import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Check if amount is a number
    if (typeof amount === 'number') {
      this.amount = amount;
    } else {
      throw new Error('Amount should be a number');
    }

    // Check if currency is an instance of Currency
    if (currency instanceof Currency) {
      this.currency = currency;
    } else {
      throw new Error('Currency should be an instance of Currency');
    }
  }

  // amount getter and setter
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // currency getter and setter
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // displayFullPrice method
  displayFullPrice() {
    // Return the amount and currency in the following format: amount currency
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // convertPrice static method
  static convertPrice(amount, conversionRate) {
    // Check if amount is a number
    if (typeof amount === 'number') {
      // Check if conversionRate is a number
      if (typeof conversionRate === 'number') {
        // Return the converted amount
        return amount * conversionRate;
      }
      // Throw an error if conversionRate is not a number
      throw new Error('Conversion rate should be a number');
    } else {
      // Throw an error if amount is not a number
      throw new Error('Amount should be a number');
    }
  }
}
