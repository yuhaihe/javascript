/**
 * @description 创建基于js对象的stack类
 */

// 在栈里，新元素都靠近栈顶，旧元素都接近栈底。
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    // this.items = {};
    // this.count = 0;

    // 遵循LIFO原则
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(8);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
stack.pop();
console.log(stack.toString());