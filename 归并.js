/**
 * @description 归并算法
 * example [[1,2,3],[3,4,6],[4,9]]
 * output [1,2,3,3,4,4,6,9]
 */

 function concatList(list) {
     const {length} = list;
     if(length === 0) {
         return null;
     }
     let len = length;
     let sortArray = new Array();
     while(len !== 0) {
        const first = list.shift();
        sortArray.push(...first);
        len--;
     }
     return sortArray.sort((a,b) => a-b);
 }

const arr = [[1,2,3],[3,4,6],[4,9]];
const a = concatList(arr)
console.log(a)