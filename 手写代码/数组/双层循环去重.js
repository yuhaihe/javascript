function unique(arr) {
  for (let i=0; i<arr.length; i++) { // 注意这里的 arr 长度是变化的
    for (let j=i+1; j<arr.length; j++) {
          if (arr[i] === arr[j]) {
            arr.splice(j, 1)
              j--
          }
      }
  }
  return arr
}
console.log(unique([2,3,4,1,2]))