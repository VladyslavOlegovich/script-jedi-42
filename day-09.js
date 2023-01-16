// http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr) {
  let len = [];
  for (let i = 0; i < arr.length; i++) {
    len.push(arr[i].length);
  }
  len.sort((a, b) => a - b);
  let min = len[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, min);
  }
  return arr;
}

//http://www.codewars.com/kata/57277a31e5e51450a4000010
function firstToLast(str, c) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == c) {
      arr.push(i);
    }
  }
  if (arr.length == 1) {
    return 0;
  }
  if (str.indexOf(c) === -1) {
    return -1;
  }
  return arr[arr.length - 1] - arr[0];
}

//https://www.codewars.com/kata/57280481e8118511f7000ffa
function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map((el) => el.split('').join(separator))
    .join(' ');
}
