/* eslint-disable */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);

        if (!Number.isInteger(floors)) {
            throw TypeError('floors must be a number');
          } else {
            this._floors = floors;

    } 
}
    get floors(){
        return this._floors;
    }
    get sqft() {
        return this._sqft;
      }
    //Override the method named evacuationWarningMessage  
    evacuationWarningMessage() {
        return (`Evacuate slowly the ${this._floors} floors`);
    }
}
