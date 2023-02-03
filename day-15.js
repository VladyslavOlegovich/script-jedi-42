// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8
const shuffleIt = (arr, ...rest) => {
  let temp = 0;
  for (let el of rest) {
    for (let i = 0; i < arr.length; i++) {
      if (i === el[0]) {
        temp = arr[el[0]];
        arr[el[0]] = arr[el[1]];
        arr[el[1]] = temp;
      }
    }
  }
  return arr;
};

// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/
function loopArr(arr, direction, steps) {
  let array = [];
  let res = [];
  if (direction === 'left') {
    array = arr.splice(0, steps);
    res = arr.concat(array);
    return res;
  } else {
    array = arr.splice(arr.length - steps);
    res = array.concat(arr);
    return res;
  }
}

// http://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arrs,d,n){
  let array = []
  for(let arr of arrs) {
    for(let el of arr) {
      array.push(el)
    }
  }
  if (d === 'left') {
      while(n > 0) {
    let element = array.shift()
    array.push(element)
    n--
  }
  }
      if (d === 'right') {
      while(n > 0) {
        let element = array.pop()
        array.unshift(element)
        n--
      }
    }
        for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      arrs[i][j] = array.shift();
    }
  }
  return arrs
}
