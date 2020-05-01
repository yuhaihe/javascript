/**
 * @description 数组模拟栈
 */

// 在栈里，新元素都靠近栈顶，旧元素都接近栈底。
class Stack{
  constructor() {
   this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 检查栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    return this.items = [];
  }
}
export default  Stack;
// 图见72页
// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(1);
// stack.push(8);
// console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.push(15);
// stack.pop();
// stack.pop();
// console.log(stack.size());