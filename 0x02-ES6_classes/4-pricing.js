/* eslint-disable */
import Currency from './3-currency';


export default class Pricing {
  constructor(amount, currency) {
    if (!Number.isInteger(amount)) {
      throw TypeError('Amount must be a number');
    } else {
      this._amount = amount;
    }
      this._currency = currency;    
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (!Number.isInteger(amount)) {
      throw TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  set currency(currency) {    
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
