/**
 * @description 创建基于js对象的stack类 --> symbol实现类的作用域限定
 */

// 在栈里，新元素都靠近栈顶，旧元素都接近栈底。
const _items = Symbol('stachItems');

class Stack{
  constructor() {
    this[_items] = [];
  }

  push(element) {
    this[_items].push(element);
  }

  pop() {
    return this[_items].pop();
  }

  // 查看栈顶元素
  peek() {
    return this[_items][this[_items].length - 1];
  }

  // 检查栈是否为空
  isEmpty() {
    return this[_items].length === 0;
  }

  size() {
    return this[_items].length;
  }

  clear() {
    return this[_items] = [];
  }
}

// 图见72页
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());