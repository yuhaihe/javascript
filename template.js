class NodeList {
  constructor(val) {
    this.value = val;
    this.next - null;
  }
}

class LinkList {
  constructor() {
    this.count = 0;
    this.head = null;
    this.equalsFn = function (a, b) {
      return a === b;
    }
  }

  push(val) {
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

  removeAt(index) {
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
  removeElement(element) {

  }
  getHead() {
    return this.head;
  }
}

let l = new LinkList();
l.push(1);
l.push(2);
l.push(3);
l.push(4);
l.removeAt(0)
console.log(l.getHead())