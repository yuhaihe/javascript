/**
 * push,removeAt,getElementAt,insert,indexOf,remove,isEmpty,size,getHead,toString
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoubleNode extends Node{
  constructor(value){
    super(value);
    this.prev = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
    return this.count;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let head = this.head;
      if (index === 0) {
        this.head = head.next;
      } else {
        // 上一个
        let prev = this.getElementAt(index - 1);
        let current = prev.next;
        prev.next = current.next;
      }
      this.count--;
      return head.value;
    }

    return undefined;
  }
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current;
      if (index === 0) {
        current = this.head;
      } else {
        current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
      }
      return current;
    }
    return undefined;
  }
  insert(element, index) {
    if (index >= 0 && index < this.count) {
      let node = new Node(element)
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        // 上一个
        let prev = this.getElementAt(index - 1);
        let next = prev.next;
        node.next = next;
        prev.next = node;
      }
      this.count++;
      return element;
    }

    return undefined;
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (current.value === element) {
        return i;
      }
      current = current.next;
    }

    return undefined;
  }
  getHead() {
    return this.head;
  }
  remove(element) {
    const index = this.indexOf(element);
    this.removeAt(index);
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }
  toString() {
    let current = this.head;
    let str = `${current.value}`;
    for (let i = 1; i < this.count; i++) {
      current = current.next;
      str = `${str},${current.value}`;
    }
    return str;
  }
}

LinkList.prototype.entries = function() {
  let current = this.head;
  const count = this.count; // 3
  return new function() {
    this.selfIndex = 0;
    this.next = function() {
      if(this.selfIndex > count || current == null) {
        return {value: undefined, done: true};
      }
      let [index, value] = [this.selfIndex, current.value];
      this.selfIndex++;
      let done = count === this.selfIndex;

      current = current.next;
      return {index, value, done};
    }
  }
}

class DoubleLinkList extends LinkList {
  constructor() {
    super();
  }
  push(val) {
    const node = new DoubleNode(val);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      node.prev = current;
      current.next = node;
    }
    this.count++;
    return this.count;
  }
  insert(element, index) {
    if (index >= 0 && index < this.count) {
      let node = new DoubleNode(element)
      let head = this.head;
      if (index === 0) {
        head.prev = node;
        node.next = head;
        this.head = node;
      } else {
        // 上一个
        let prev = this.getElementAt(index - 1);
        let next = prev.next;
        node.next = next;
        node.prev = prev;
        prev.next = node;
      }
      this.count++;
      return element;
    }

    return undefined;
  }
}
let l = new LinkList();
l.push(1);
l.push(2);
l.push(3);
l.insert(1.5, 1)
const item = l.entries();
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(item.next())



