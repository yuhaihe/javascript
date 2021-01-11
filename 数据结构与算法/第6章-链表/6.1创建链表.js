/**
 * @description 单向链表模拟实现 --挺复杂
 * @author hayho
 */

import { defaultEquals } from '../util.js';
import { Node } from './models/linked-list-models.js';

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;  // 元素数量
        this.head = undefined; // 第一个元素的引用
        this.equalsFn = equalsFn;  // 此函数作用比较链表中的元素是否相等
    }

    push(element) {
        // 创建node项 node = {element:val,next:undefined}
        const node = new Node(element);
        let current;
        if (this.head == null) {
            // head 指向node元素
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) { // 获得最后一项
                current = current.next;
            }
            // 将next赋为新元素，建立连接
            current.next = node;
        }
        this.count++;
    }

    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) {
            let current = this.head;

            // 移除第一项
            if (index === 0) {
                this.head = current.next;
            } else {
                // 实现1
                // let previous;
                // for (let i = 0; i < index; i++) {
                //     previous = current;
                //     current = current.next;
                // }
                // 将previous和current的下一项连接起来，跳过current从而移除他
                // console.log(previous, current)

                // 实现2
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element
        }
        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if (this.head == null) return ''
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size(); i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

const list = new LinkedList();
list.push(15);
list.push(10);
list.push(11);
list.push(13);
// console.log(list.toString());
// console.log(list.getElementAt(1));
// console.log(list.removeAt(1));
// console.log(list.toString());
list.insert(100, 1)
// console.log(list.toString());
// console.log(list.remove(13));
// console.log(list.toString());
// console.log(list.isEmpty());
// console.log(list.size());
console.log(list.getHead());