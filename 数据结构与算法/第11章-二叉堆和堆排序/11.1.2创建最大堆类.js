import { MinHeap } from "./11.1.1创建最小堆类.js";
import { defaultCompare, reverseCompare } from '../util.js';
export class MaxHeap extends MinHeap{
  constructor(compareFn = defaultCompare) {
   super(compareFn);
   this.compareFn = reverseCompare(compareFn);
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);

maxHeap.insert(1);
console.log('Heap min value: ', maxHeap.findMinimum()); 
maxHeap.insert(8);
console.log('Heap min value: ', maxHeap.findMinimum()); 