function bubbleSort(arr) {
  let len = arr.length
  for (let i=len; i>=2; i--) { // 排完第 2 个，第一个自动为最小
    for (let j=0; j<i-1; j++) { // 逐渐缩小范围
          if (arr[j] > arr[j+1])
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }1
  }
  return arr
}

console.log(bubbleSort([2,5,1,4,7]))