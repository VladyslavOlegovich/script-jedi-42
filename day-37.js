// https://www.codewars.com/kata/5c743cec901022438549964a
function createIterator(arr) {
  let index = 0;

  function next() {
    if (index < arr.length) {
      const value = arr[index];
      index++;
      return {value, done: false};
    } else {
      return {value: undefined, done: true};
    }
  }

  return {
    next,
    get index() {
      return index;
    },
  };
}
