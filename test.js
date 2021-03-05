var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = (start + end) >> 1;
    if (nums[middle] < target) {
      start = middle + 1;
    }  else {
      end = middle - 1;
    }
  
  }

  return start;
};

const res = searchInsert( [1,3,5,6], 5);
console.log(res);