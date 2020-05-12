/**
 * @description 计数排序
 */
import { defaultCompare, Compare, swap } from "../util.js";

function countingSort(array) {
  if (array.length < 2) {
    return array;
  }
  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1);
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });
  return array;
}

function findMaxValue(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

let arr = [5,4,3,2,3,1];
arr = countingSort(arr);
console.log(arr);