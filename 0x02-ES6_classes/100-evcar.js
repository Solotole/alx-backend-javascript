import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // const superObject = {};

    // if (this.constructor === 'EVCar') {
    // const superobject = super.cloneCar();
    // const superObject = superobject;
    // }
    // return superObject;
    return this.constructor === 'EVCar' ? super.cloneCar() : {};
  }
}
