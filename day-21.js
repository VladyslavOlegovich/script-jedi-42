// http://www.codewars.com/kata/573e6831e3201f6a9b000971
// :(

// http://www.codewars.com/kata/573fb9223f9793e485000453
const regex = /\B(?=(\d{3})+(?!\d))/g;
const addCommas = (money, reg) => {
  return money.replace(reg, ',');
};
