// https://www.codewars.com/kata/how-new-works
const myObj = Object.create(MyObject.prototype);
MyObject.call(myObj);

// http://www.codewars.com/kata/replicate-new
function nouveau(constructor, ...args) {
  const instance = {};
  instance.constructor = constructor;
  Object.setPrototypeOf(instance, constructor.prototype);
  const result = constructor.apply(instance, args);
  return result && ['object', 'function'].includes(typeof result) ?
    result :
    instance;
}
