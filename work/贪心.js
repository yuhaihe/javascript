/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
 let max = 0;
 for (let i = 1; i < prices.length; i++) {  
   if(prices[i] > prices[i-1]){
     max = max + prices[i] - prices[i-1]
   }
 }
 return max;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));