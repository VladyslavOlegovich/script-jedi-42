// https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes
const description = {
  description: 'TODO: GIVE ME A DESCRIPTION',
};
Object.setPrototypeOf(widget, description);
Object.setPrototypeOf(gadget, description);
Object.setPrototypeOf(thingamabob, description);

// https://www.codewars.com/kata/javascript-class-like-objects
class Animal {
  constructor(name, type) {
    this._name = name;
    this._type = type;
  }
  toString() {
    return this._name + ' is a ' + this._type;
  }
  get name() {
    return this._name;
  }
  get type() {
    return this._type;
  }
  set name(name) {
    this._name = name;
  }
}

// http://www.codewars.com/kata/power-bind
Function.prototype.bind = function(context) {
  const func = this;
  return function(...args) {
    const rightContext = this === global ? context : this;
    return func.apply(rightContext, args);
  };
};
