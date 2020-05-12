/**
 * @description 归并排序
 */
import { defaultCompare, Compare, swap } from "../util.js";

function mergeSort(array, comepareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), comepareFn);
    const right = mergeSort(array.slice(middle, length), comepareFn);
    array = merge(left, right, comepareFn);
  }
  return array;
}

function merge(left, right, comepareFn) {
  console.log(left, right)
  // [7,8] [5,6] l=2
  let i = 0;//0
  let j = 0;//0 1 2
  const result = [];// [5,6]
  while (i < left.length && j < right.length) {
    result.push(
      comepareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
    );
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j)); // [5,6,7,8]
}

let array = [8, 7, 6, 5, 4, 3, 2, 1];
array = mergeSort(array);
console.log(array)

