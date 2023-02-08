// https://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  const grades = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  scores.filter((el) => {
    if (el === 100) grades.S++;
    if (el >= 90 && el < 100) grades.A++;
    if (el >= 80 && el < 90) grades.B++;
    if (el >= 60 && el < 80) grades.C++;
    if (el >= 0 && el < 60) grades.D++;
    if (el === -1) grades.X++;
  });
  return grades;
}

// https://www.codewars.com/kata/57308546bd9f0987c2000d07
function mirrorImage(arr) {
  let a = 0;
  let b = 0;
  let mirrorElements = arr.some((el, i) => {
    a = el;
    b = arr[i + 1];
    return el === Number(String(b).split('').reverse().join(''));
  });
  return mirrorElements ? [a, b] : [-1, -1];
}

// http://www.codewars.com/kata/5731861d05d14d6f50000626
const bigToSmall = (arr) =>
  []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join('>');
