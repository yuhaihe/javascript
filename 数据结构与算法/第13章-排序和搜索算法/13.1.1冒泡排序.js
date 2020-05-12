import { defaultCompare, Compare, swap } from "../util.js";

// 基础版
function bubbleSort(array, compareFn = defaultCompare) {
  const length = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn[array[i]], array[j + 1] === Compare.BIGGER_THAN) {
        swap(array, i, j + 1);
      }
    }
  }
  return array;
}

// 改进版
function modifiedBubbleSort(array, compareFn = defaultCompare) {
  const length = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn[array[j]], array[j + 1] === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
