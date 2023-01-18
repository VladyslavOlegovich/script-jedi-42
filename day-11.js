//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  for (let el of s1) {
    if (!s2.has(el)) {
      return false;
    }
  }
  return true;
}

function notEqual(s1, s2) {
  for (let el of s1) {
    if (!s2.has(el)) {
      return true;
    }
  }
  return false;
}

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
  let s1 = new Set(arr1);
  let s2 = new Set(arr2);
  let task1 = 0;
  let task2 = 0;
  let task3 = 0;
  let task4 = 0;
  for (let el of s2) {
    if (s1.has(el)) {
      task1 += 1;
    } else if (!s1.has(el)) {
      task4 += 1;
    }
  }
  for (let el of s1) {
    if (!s2.has(el)) {
      task3 += 1;
    }
  }
  task2 = task3 + task4;
  return [task1, task2, task3, task4];
}
