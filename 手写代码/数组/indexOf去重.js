function unique(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    res.indexOf(element) === -1 && res.push(element)
    
  }
  return res
}
console.log(unique([2,3,4,1,2]))