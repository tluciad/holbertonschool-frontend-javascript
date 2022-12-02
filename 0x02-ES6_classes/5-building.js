export default class Building {
  constructor(sqft) {
    if (!Number.isInteger(sqft)) {
      throw TypeError('sqft must be a number');
    } else {
      this._sqft = sqft;
    }
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
