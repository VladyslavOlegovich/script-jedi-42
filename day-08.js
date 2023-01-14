//http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n) {
  switch (n) {
    case Number.MAX_VALUE:
      return 'Input number is Number.MAX_VALUE';
    case Number.MIN_VALUE:
      return 'Input number is Number.MIN_VALUE';
    case Number.NEGATIVE_INFINITY:
      return 'Input number is Number.NEGATIVE_INFINITY';
    case Number.POSITIVE_INFINITY:
      return 'Input number is Number.POSITIVE_INFINITY';
    case n:
      return `Input number is ${n}`;
    default:
      return 'Input number is Number.NaN';
  }
}

//https://www.codewars.com/kata/57238ceaef9008adc7000603
function colorOf(r, g, b) {
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);
  if (red.length === 1) {
    red = '0' + red;
  }
  if (green.length === 1) {
    green = '0' + green;
  }
  if (blue.length === 1) {
    blue = '0' + blue;
  }
  return `#${red}${green}${blue}`;
}

//http://www.codewars.com/kata/57256064856584bc47000611
function howManySmaller(arr, n) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toFixed(2);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      res++;
    }
  }
  return res;
}
