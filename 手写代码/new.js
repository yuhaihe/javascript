/**
 * new 被调用后做了三件事情：

让实例对象可以访问到私有属性
让实例对象可以访问构造函数原型 (constructor.prototype) 所在原型链上的属性
考虑构造函数有返回值的情况
 */

 function MyNew(ctor, ...args) {
    let fn = Array.prototype.shift.call(arguments);
    if(typeof fn !== 'function') {
        throw `${fn} is not a function`
    }
    let obj = Object.create(fn.prototype);
    let res = fn.apply(obj, args);  // 考虑构造函数有返回值的情况，直接执行
    let isObject = typeof res === 'object' && res != null;
    let isFunction = typeof res === 'function';
    return isObject || isFunction ? res : obj;
 }

 function Dog(name) {
    this.name = name;
    this.say = function() {
        console.log(this.name);
    }
    return {
        age: 20
    }
 }

 const wangcai = new Dog('wangcai')
 console.log(wangcai.age)
 const dubao = MyNew(Dog, 'dbao');
 console.log(dubao.say())