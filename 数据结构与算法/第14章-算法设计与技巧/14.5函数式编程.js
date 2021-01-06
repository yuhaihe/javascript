// 命令式编程
const printArray = function(array) {
  for (let i = 0; i < array.length; i++) {
   console.log(array[i])
  }
}
// printArray([1,2,3,4,5]);

// 函数式编程
const forEach = (array, action) => {
  array.forEach(i =>  action(i));
}

const logItem = item => console.log(item);

forEach([1,2,3,4,5], logItem);