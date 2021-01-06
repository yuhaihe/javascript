/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max = max + prices[i] - prices[i - 1]
    }
  }
  return max;
};

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([1,2,3,4,5]));

// 1,1,2,3,5,8,13
function line(index) {
  if(index === 0) { return 0 }
  if (index <= 2) { return 1 }
  return line(index - 1) + line(index - 2)
}
// let arr = new Array(100).fill(0).map((item,index) => line(index+1));
console.log(line(10))