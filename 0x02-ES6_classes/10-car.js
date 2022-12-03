export default class Car {
    constructor(brand, motor, color) {
        
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }
    cloneCar() {
        const clone = this.constructor
        return new clone();
    }
}
