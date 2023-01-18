//http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  let el = '';
  let st = '';
  let arr = [];
  let upper = str.toUpperCase().split(' ');
  for (let i = 0; i < upper.length; i++) {
    el = upper[i].slice(-1).toLowerCase();
    st = upper[i].slice(0, -1);
    arr.push(st + el);
  }
  return arr.join(' ');
}

//http://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`;
}
