export default class HolbertonClass {
  constructor(size, location) {
    if (!Number.isInteger(size)) {
      throw TypeError('Size must be a number');
    } else {
      this._size = size;
    }
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    } else {
      this._location = location;
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return 8;
  }
}
