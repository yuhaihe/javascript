// 模拟bind
Function.prototype.bind1 = function() {
    // 参数拆解数组
    const arg = Array.from(arguments);
    // const arg2 = Array.prototype.slice.call(arguments);

    // 获取this
    const shift = arg.shift();
    
    // fn1.bind中的fn1
    const self = this;

    // 返回一个函数
    return function() {
        return self.apply(shift, arg);
    };
}

function fn1(a,b) {
    console.log(this.x);
    console.log(a, b)
}

const fn2 = fn1.bind1({x: 100}, 10, 20);
fn2();

// 模拟apply 思路：将要改变this指向的方法挂到目标this上执行
Function.prototype.apply2 = function(context) {

    context.fn = this;
    let result;
    if(arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn();
    }

    return result;
}


function fn3(a, b) {
    console.log(a, b)
    console.log(this.x);
}

// fn3.apply2({x: 'apply'}, [100, 200])

// 模拟call
Function.prototype.call1 = function() {
    const arg = Array.from(arguments);

    const shift = arg.shift();
    shift.fn = this;
    if(arg.length === 0) {
        return shift.fn();
    } else {
        return shift.fn(...arg)
    }

}

// fn3.call({x: 'apply'}, 100)
