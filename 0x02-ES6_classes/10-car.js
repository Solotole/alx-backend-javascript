const carSymbol = Symbol('Car');

export default class Car {
  constructor(brand, motor, color) {
    this[carSymbol] = { _brand: brand, _motor: motor, _color: color };
  }

  cloneCar() {
    const { _brand, _motor, _color } = this[carSymbol];
    return new this.constructor(_brand, _motor, _color);
  }

  get _brand() {
    return this[carSymbol]._brand;
  }

  get _motor() {
    return this[carSymbol]._motor;
  }

  get _color() {
    return this[carSymbol]._color;
  }
}
