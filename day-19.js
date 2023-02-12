// http://www.codewars.com/kata/5735e39313c205fe39001173
const countAnimals = (animals, count) => {
  return count.map((el) => {
    return (animals.match(new RegExp(el, 'g')) || []).length;
  });
};

// http://www.codewars.com/kata/573975d3ac3eec695b0013e0
const findSimilarity = (str, word) => {
    const regStr = word[0] + word.slice(1, -1).replace(/./g, '.') + word.slice(-1);
    const regExp = new RegExp('^' + regStr + '$');
    return str.split(' ').filter((el) => regExp.test(el)).join(' ');
  }
