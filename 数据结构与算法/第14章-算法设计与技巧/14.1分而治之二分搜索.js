import { defaultCompare, Compare } from '../util.js';
// import { quickSort } from '../第13章-排序和搜索算法/13.1.5快速排序.js';

function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = array;//排序
  let low = 0;
  let high = sortedArray.length - 1;
  return binarySearchRecursive(array, value, low, high, compareFn);
}

function binarySearchRecursive(array, value, low, high, compareFn) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    console.log(mid)
    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn)
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn)
    } else {
      return mid;
    }
  }
  return -1;
}

let arr = [1,2,3,4,5,6,7];
console.log(binarySearch(arr, 5))