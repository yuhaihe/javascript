const MyClass = (function () {
  const _x = new WeakMap();
  class InnerClass {
    constructor (x) {
      _x.set(this, x);
    }

    getX () {
      console.log(_x)
      return _x.get(this);
    }
  }
  return InnerClass;
})()

let myClass = new MyClass('5')
console.log(myClass.getX()) // 5
console.log(myClass._x) // undefined