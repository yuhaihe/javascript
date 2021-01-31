/**
 * 1.计算多个区间的交集
 *   区间用长度为2的数字数组表示，如[2, 5]表示区间2到5（包括2和5）；
 *   区间不限定方向，如[5, 2]等同于[2, 5]；
 *   实现`getIntersection 函数`
 *   可接收多个区间，并返回所有区间的交集（用区间表示），如空集用null表示
 * 示例：
 *   getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
 *   getIntersection([1, 7], [8, 9]); // null
 */

function getIntersection () {
  const array = Array.prototype.slice.call(arguments);
  let [min, max] = [0, 0];
  let isHave = false;
  array.forEach((item, index) => {
    let [a, b] = item;
    if (a > b) {
      [a, b] = [b, a]
    }
    if (index === 0) {
      [min, max] = [a, b]
    } else {
      if (a > min && a < max) { min = a;isHave=true; }
      if (b > min && b < max) { max = b;isHave=true; }
    }
  })
  return isHave ? [min, max] : null;
}
console.log(getIntersection([5, 2], [4, 9], [3, 6]))
console.log(getIntersection([1, 7], [8, 9]))