/**
 * push,removeAt,getElementAt,insert,indexOf,remove,isEmpty,size,getHead,toString
 */

class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

class LinkList {
  constructor () {
    this.count = 0;
    this.head = null;
  }

  push (val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
    return node;
  }

  removeAt (index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let prev = this.getElementAt(index - 1);
        current = prev.next;
        prev.next = current.next;
      }
      this.count--;
      return current.value;
    }

    return undefined;
  }
  getElementAt (index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }

    return undefined;
  }
  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
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
  indexOf (element) {
    let current = this.head;
    for (let index = 0; index < this.count; index++) {
      if (current.value === element) {
        return index;
      }
      current = current.next;
    }

    return undefined;
  }
  getHead () {
    return this.head;
  }
  remove (element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (current.value === element) {
        return this.removeAt(i);
      }
      current = current.next;
    }

    return undefined;
  }
  isEmpty () {
    return this.size() === 0;
  }
  size () {
    return this.count;
  }
  toString () {
    let current = this.head;
    let str = `${current.value}`;
    for (let i = 1; i < this.count; i++) {
      current = current.next;
      str = `${str}, ${current.value}`
    }
    return str;
  }
}


let l = new LinkList();
l.push('a');
l.push('b');
l.push('c');
l.push('end')
console.log(l.toString());
