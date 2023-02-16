// http://www.codewars.com/kata/a-function-within-a-function
const always = (n) => () => n;

// https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript
const state = {
  modifier: 2,
};
const solution = (arr, options) =>
  arr.map((el) => (el += 2 * options.modifier));
