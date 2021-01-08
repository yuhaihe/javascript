// 函数作为返回值
// function print() {
//   const a = 100;
//   return function() {
//     console.log(a)
//   }
// }

// const a = 200;
// const fn = print();
// fn();

// 函数作为参数
function print(fn) {
  const a = 200;
  return fn();
}
const a = 100;
function fn() {
  console.log(a);
}

function an() {
  const a = 300;
  print(fn); // 100
}

an();
