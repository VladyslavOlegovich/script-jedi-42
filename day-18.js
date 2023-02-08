// https://www.codewars.com/kata/573156709a231dcec9000ee8
function tailAndHead(arr) {
  const arrOfStrings = arr.map((num) => num.toString());
  const result = arrOfStrings.reduce((acc, curr, index, arr) => {
    if (index < arr.length - 1) {
      acc.push(parseInt(curr[curr.length - 1]) + parseInt(arr[index + 1][0]));
    }
    return acc;
  }, []);
  return result.reduce((acc, curr) => acc * curr);
}

// https://www.codewars.com/kata/5732b0351eb838d03300101d
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return `It's a fake array`;
  if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
    return `It's a black array`;
  }
  return `It's a white array`;
}

// https://www.codewars.com/kata/5735956413c2054a680009ec
function rndCode() {
  let result = '';
  const letters = 'ABCDEFGHIJKLM';
  const numbers = '123456789';
  const symbols = '~!@#$%^&*';
  for (let i = 0; i < 2; i++) {
    result += letters[~~(Math.random() * letters.length)];
  }
  for (let i = 0; i < 4; i++) {
    result += numbers[~~(Math.random() * numbers.length)];
  }
  for (let i = 0; i < 2; i++) {
    result += symbols[~~(Math.random() * symbols.length)];
  }
  return result;
}
