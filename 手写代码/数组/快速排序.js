/**
 * @description 实现思路：选择基准值 mid，循环原数组，小于基准值放左边数组，大于放右边数组，然后 concat 组合，最后依靠递归完成排序
 */

 function quickSort(arr) {
    if(arr.length <= 1) return arr;
    let left = [];
    let right = [];
    let [mid] = arr.splice(0, 1);
    for (let i = 0; i < arr.length; i++) {
      arr[i] > mid ? right.push(arr[i]) : left.push(arr[i])
    }
    return quickSort(left).concat([mid], quickSort(right));
 }

 console.log(quickSort([2,4,1,5,3]))