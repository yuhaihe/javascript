// 模拟bind
Function.prototype.bind1 = function() {
  let args = Array.from(arguments);
  let context = args.shift();
  context.fn = this;
  let result;
  if(args.length === 0) {
    result = function() {
      context.fn();
    }
  } else {
    result = function() {
      context.fn(...args);
    }
  }
  return result;
}

function fn1(a,b) {
    console.log(this.x);
    console.log(a, b)
}

const fn2 = fn1.bind1({x: 100}, 10, 20);
fn2();

// 模拟apply 思路：将要改变this指向的方法挂到目标this上执行
Function.prototype.apply2 = function(context, args = []) {
  context.fn = this;
  let result;
  if(args.length === 0) {
    result = context.fn();
  } else {
    result = context.fn(...args);
  };
  return result
}


function fn3(a, b) {
    console.log(a, b)
    console.log(this.x);
}

// fn3.apply2({x: 'apply'}, [100, 200])

// 模拟call
Function.prototype.call1 = function() {
  let args = Array.from(arguments);
  let context = args.shift();
  context.fn = this;
  if(args.length === 0) {
    return context.fn();
  } else {
    return context.fn(...args);
  }
}

// fn3.call1({x: 'call'}, 100, 200)
