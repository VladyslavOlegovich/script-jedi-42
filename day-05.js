//https://www.codewars.com/kata/is-this-my-tail/train/javascript
function correctTail(body, tail) {
  const sub = body.substr(body.length - tail.length);
  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
  let result = '';
  if (bonus) {
    result = `£${salary * 10}`;
  } else {
    result = `£${salary}`;
  }
  return result;
}

function automorphic(n) {
  let s = n.toString();
  let x = s.split('').reverse().join('');
  return x;
}

// https://www.codewars.com/kata/5a58d889880385c2f40000aa
function automorphic(n) {
  let square = n ** 2;
  if (square.toString().includes(n)) {
    return 'Automorphic';
  } else {
    return 'Not!!';
  }
}
