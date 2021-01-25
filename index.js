var fib = function(n) {
  let arr = [0,1,1];
  if(n<=2) {
      return arr[n];
  }
  for(let i=0;i<n-2;i++){
      const {length} = arr;
      const num = arr[length-1] + arr[length-2];
      arr.push(num);
  }
  console.log(arr)
  return arr[n]
};
fib(10)