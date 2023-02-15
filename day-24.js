// http://www.codewars.com/kata/duplicate-arguments
const checkDuplicateValues = (...args) => {
  const mySet = new Set();
  args.forEach((el) => mySet.add(el));
  return mySet.size < args.length;
};

// http://www.codewars.com/kata/last
function last(list) {
  if (arguments.length > 1) return arguments[arguments.length - 1];
  if (Array.isArray(list)) {
    return list[list.length - 1];
  } else if (typeof list === 'string') {
    return list.slice(-1);
  }
  return list;
}
