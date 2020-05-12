/**
 * @description 选择排序
 */
import { defaultCompare, Compare, swap } from "../util.js";

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
}

let array = [10,5,7,2,20];
console.log(array.join(','));
array = selectionSort(array);
console.log(array.join(','));




