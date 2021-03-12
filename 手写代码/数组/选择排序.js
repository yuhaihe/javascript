function selectSort(arr) {
  let len = arr.length
  for (let i=0; i<len-1; i++) {
    for (let j=i; j<len; j++) {
        if (arr[j] < arr[i]) 
            [arr[i], arr[j]] = [arr[j], arr[i]]
      }
  }
  return arr
}
console.log(selectSort([2,4,5,1]))