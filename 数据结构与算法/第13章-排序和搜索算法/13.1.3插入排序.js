/**
 * @description 插入排序
 */
import { defaultCompare, Compare, swap } from "../util.js";

function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i; // j=2
    temp = array[i]; // temp = 1
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      // console.log(j)
      // j=2 3,5,1,4,2 --> 3,5,5,4,2
      // j=1 3,3,5,4,2
      array[j] = array[j - 1];
      j--; // j=1 j=0
    }
    array[j] = temp; // 1,3,5,4,2
  }
  return array;
}

const array = insertionSort([3,5,1,4,2]);
console.log(array)