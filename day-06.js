//https://www.codewars.com/kata/maximum-multiple/train/javascript
function maxMultiple(divisor, bound) {
  while (bound % divisor !== 0) {
    bound--;
  }
  return bound;
}

//https://www.codewars.com/kata/is-he-gonna-survive/train/javascript
function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

//https://www.codewars.com/kata/59441520102eaa25260000bf
function unusualFive() {
  let result = 'Hello';
  return result.length;
}
