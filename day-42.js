// https://www.codewars.com/kata/55c04b4cc56a697bb0000048
function scramble(str1, str2) {
  const st1 = str1.split('');
  const st2 = str2.split('');

  const count1 = getCounts(st1);
  const count2 = getCounts(st2);
  return st2.every((el) => count2[el] <= count1[el]);

  function getCounts(arr) {
    return arr.reduce((obj, el) => {
      obj[el] = (obj[el] || 0) + 1;
      return obj;
    }, {});
  }
}

// https://leetcode.com/problems/two-sum/
const twoSum = function(nums, target) {
  const indexesOfNums = nums.reduce((arr, el, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      if (el + nums[j] === target) {
        arr.push(i, j);
      }
    }
    return arr;
  }, []);
  return indexesOfNums;
};
