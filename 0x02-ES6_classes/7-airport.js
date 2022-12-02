export default class Airport {
  constructor(name, code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    } else {
      this._code = code;
    }
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
