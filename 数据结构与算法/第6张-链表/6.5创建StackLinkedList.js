/**
 * @description 使用链表创建栈数据结构
 */
import DoublyLinkedList from './6.2双向链表.js'

class StackLinkedList {
    constructor(){
        this.items = new DoublyLinkedList();
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    size() {
        return this.items.size();
    }

    clear() {
        for (let i = 0; i < this.size(); i++) {
            this.items.remove(i)
            i--;
        }
        
    }

    toString() {
        return this.items.toString();
    }
}