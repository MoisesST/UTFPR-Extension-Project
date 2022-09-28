export class Person {
  _name;

  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this._name = name;
  }
}