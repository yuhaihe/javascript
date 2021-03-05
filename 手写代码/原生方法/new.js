/**
 * new 被调用后做了三件事情：

让实例对象可以访问到私有属性
让实例对象可以访问构造函数原型 (constructor.prototype) 所在原型链上的属性
考虑构造函数有返回值的情况
 */

 function MyNew(fn, ...args) {
  let obj = {};
  // 使空对象的隐式原型指向原函数的显式原型
  obj.__proto__ = fn.prototype;
  // this指向obj
  let result = fn.apply(obj, args);

  return result instanceof Object ? result : obj;
 }

 function Dog(name) {
    this.name = name;
    this.say = function() {
        console.log(this.name);
    };
    // return 20
 }

//  const dubao = new Dog('dbao');
 const dubao = MyNew(Dog, 'dbao');
 console.log(dubao)
 dubao.say();