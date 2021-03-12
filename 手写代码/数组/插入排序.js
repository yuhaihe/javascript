/**
 * @description 从序列左端开始依次对数据进行排序的算法称为插入排序。
 * https://juejin.cn/post/6844904083996803086
 */

function insertSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

console.log(insertSort([3, 4, 2, 5, 1]))