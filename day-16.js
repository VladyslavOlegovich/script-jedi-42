// http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  const array = arr.slice();
  const result = [];
  while (array.length > 0) {
    const num = array.splice(0, 3).reduce((a, b) => a + b);
    result.push(num);
  }
  return result;
}

// http://www.codewars.com/kata/572df796914b5ba27c000c90
function sortIt(arr) {
  // :(
}

// http://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr) {
  const arrOfChangedStr = arr.map((str) => {
    if (str.length % 2 === 0) {
      const firstPartOfStr = str.substring(0, str.length / 2);
      const lastPartOfStr = str.substring(str.length / 2, str.length);
      str = `${firstPartOfStr}|${lastPartOfStr}`;
    } else {
      let firstPartOfStr = str.substring(0, str.length / 2 + 1);
      const lastPartOfStr = str.substring(str.length / 2 + 1, str.length);
      firstPartOfStr = firstPartOfStr.slice(0, -1);
      str = `${firstPartOfStr}|${lastPartOfStr}`;
    }
    return str;
  });
  return arrOfChangedStr;
}
