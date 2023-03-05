// https://www.codewars.com/kata/basics-generators-number-1/javascript
function* generator(n = 1) {
  while (true) {
    let value = yield n++;
    n = value || n;
  }
}
