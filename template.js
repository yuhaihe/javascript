/**
 * push,removeAt,getElementAt,insert,indexOf,remove,isEmpty,size,getHead,toString
 */

class NodeList {
  constructor (val) {
    this.value = val;
    this.next = undefined;
  }
}

class LinkList {
  constructor () {
    this.count = 0;
    this.head = null;
  }

  push (val) {
    const node = new NodeList(val);
    if (this.head == null) {
      this.head = node
    } else {
      let cur = this.head;
      while (cur.next != null) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.count++;
  }

  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.value;
    } else {
      return undefined;
    }
  }
  getElementAt (index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }

    return undefined;
  }
  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new NodeList(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let previous = this.getElementAt(--index);
        let current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count++;
      return true;
    }

    return undefined;
  }
  indexOf (element) {
    let node = this.head;
    for (let i = 0; i < this.count; i++) {
      if (node.value === element) {
        return i;
      }
      node = node.next;
    }

    return -1;
  }
  getHead () {
    return this.head;
  }
  remove (element) {
    let node = this.head;
    for (let i = 0; i < this.count; i++) {
      if (node.value === element) {
        this.removeAt(i);
        this.count--;
        return i;
      }
      node = node.next;
    }

    return false;
  }
  isEmpty () {
    return this.size() === 0;
  }
  size () {
    return this.count;
  }
  toString () {
    if (this.isEmpty()) return '';
    let str = `${this.head.value}`;
    let current = this.head.next;
    for (let index = 1; index < this.size(); index++) {
      str = `${str}, ${current.value}`
      current = current.next;
    }
    return str;
  }
}

let l = new LinkList();
l.push(1);
l.push(2);
l.push(3);
l.push(4);
l.push('five');
console.log(l.toString());