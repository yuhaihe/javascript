/**
 * 定义：将函数与其参数的一个子集绑定起来后返回个新函数。
   好处：减少代码冗余，增加可读性，是一种简洁的实现函数委托的方式。
 */

function sum(a, b, c) {
  return a + b + c
}
function curry(fn, args=[]) {
  return function() {
      let newArgs = args.concat(Array.prototype.slice.call(arguments))
      if (newArgs.length < fn.length) { // 假如：实参个数 < 形参个数
          return curry.call(this, fn, newArgs)
      } else {
          return fn.apply(this, newArgs)
      }
  }
}

let currySum = curry(sum)
console.log(currySum(1, 2, 3))   //6
console.log(currySum(1, 2)(3))   //6
console.log(currySum(1)(2)(3))   //6