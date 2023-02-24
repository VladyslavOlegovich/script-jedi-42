// https://www.codewars.com/kata/array-number-reduce/train/javascript
Array.prototype.reduce = function(func, initial) {
  let sum = initial !== undefined ? initial : this[0];
  for (let i = initial !== undefined ? 0 : 1; i < this.length; i++) {
    sum = func(sum, this[i]);
  }
  return sum;
};

// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056
Object.deepFreeze = function(object) {
  Object.freeze(object);
  for (const key in object) {
    const el = object[key];
    if (typeof el === 'object') {
      Object.deepFreeze(el);
    }
  }
};
