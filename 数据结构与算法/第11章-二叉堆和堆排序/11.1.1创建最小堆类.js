/**
 * @description 数组方式创建， 之前为对象指针方式
 */
import { defaultCompare, Compare } from '../util.js';

export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  insert(value) {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true
    }
    return false;
  }

  siftUp(index) {  
    // index   4
    // parent  1
    // heap   [2,3,4,5,1]
    let parent = this.getParentIndex(index);
    while (index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) > Compare.LESS_THAN) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  extract() {
    if (this.isEmpty()) return undefined;
    if (this.size() === 1) return this.heap.shift();
    const removedValue = this.heap.shift();
    this.siftDown(0);
    return removedValue;
  }

  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (left < size && this.heap[element] > this.heap[left]) {
      element = left;
    }
    if (right < size && this.heap[element] > this.heap[right]) {
      element = right;
    }
    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }
}

const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

const heap = new MinHeap();
// heap.insert(8);
// heap.insert(3);
// heap.insert(4);
// heap.insert(10);

// heap.insert(2);
// console.log('Heap min value: ', heap.findMinimum()); // 2
// heap.insert(1);
// console.log('Heap min value: ', heap.findMinimum()); // 1
for (let i = 1; i < 10; i++) {
  heap.insert(i)
}
// console.log('extract minNum: ' + heap.extract())
// console.log(heap.heap)