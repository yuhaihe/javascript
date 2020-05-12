/**
 * @description 动态规划
 */

function minCoinChange(coins, amount) {
  // 记忆化面额数据
  const cache = [];
  const makeChange = (value) => {
    // 金额非法
    if (!value) return [];
    // 金额已缓存，说明已经计算完毕，返回
    if (cache[value]) return cache[value];
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      
      // if(newAmount>=0&&)
    }
  };
  // 传入找零金额
  return makeChange(amount)
}

console.log(minCoinChange([1, 5, 10, 25], 36))