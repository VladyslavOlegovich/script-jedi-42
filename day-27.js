// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a
const buildFun = (n) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(() => i);
  }
  return res;
};

// https://www.codewars.com/kata/shifty-closures/train/javascript
function greeting(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}
const greet_abe = greeting('Abe');
const greet_ben = greeting('Ben');
