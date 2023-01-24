// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  let el = "";
  let st = "";
  const arr = [];
  const upper = str.toUpperCase().split(" ");
  for (let i = 0; i < upper.length; i++) {
    el = upper[i].slice(-1).toLowerCase();
    st = upper[i].slice(0, -1);
    arr.push(st + el);
  }
  return arr.join(" ");
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a
function topSecret(str) {
  return str
    .split("")
    .map((char) => {
      if (
        (char.charCodeAt() > 64 && char.charCodeAt() < 91) ||
        (char.charCodeAt() > 96 && char.charCodeAt() < 123)
      ) {
        char = String.fromCharCode(char.charCodeAt() - 3);
      }
      return char;
    })
    .join("")
    .replace("_", "y")
    .replace("^", "x")
    .replace("`", "z");
}

// http://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`;
}
