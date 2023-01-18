//https://www.codewars.com/kata/59859f435f5d18ede7000050
function wordToBin(str) {
  let arr = str.split('');
  let resArr = [];
  let el = '';
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charCodeAt().toString(2);
    if (arr[i].length < 8) {
      el = '0' + arr[i];
      resArr.push(el);
    }
  }
  return resArr;
}

// https://www.codewars.com/kata/57f75cc397d62fc93d000059
function calc(x){
  const arr = x.split('')
  const total1 = arr.map((el, i) =>  x.charCodeAt(i)).join('')
  const total2 = []
  for(let i = 0; i < total1.length; i++) {
    if(total1[i] === '7') {
      total2.push('1')
    } else {
      total2.push(total1[i])
    }
  }
   const res1 = total1.split('').reduce((prev, curr) => +prev + +curr, 0)
   const res2 = total2.reduce((prev, curr) => +prev + +curr, 0)
  return res1 - res2
  }
