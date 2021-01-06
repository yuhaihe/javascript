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
    // 对每个面额进行newAmount计算
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      // 获取newAmount值
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      console.log(newMin)
      if (newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)) {
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[value] = min);
  };
  // 传入找零金额
  return makeChange(amount);
}

console.log(minCoinChange([1, 3, 4], 6))

// function minCoinChange2(coins, amount) {
//   if (amount <= 0) return 0;
//   const { length } = coins;
//   let min = []; // 25->10->1
//   let newAmount = amount;// 11->1->0
//   for (let i = length-1; i >= 0; i--) {
//     let coin = coins[i];
//     while (newAmount / coin >= 1 && newAmount !== 0) {
//       min.push(coin);
//       newAmount = newAmount - coin;
//     }
//   }
//   return min;
// }
// console.log(minCoinChange2([1, 3, 4], 6 ))
