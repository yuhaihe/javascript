/**
 * @description 有序链表
 */

import LinkedList from "./6.1创建链表.js";
import { defaultEquals, defaultCompare, Compare } from "../util.js";

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    insert(element, index) {
        if (this.isEmpty()) {
            return super.insert(element, 0)
        }
        const pos = this.getIndexNextStoredElement(element);
        return super.insert(element, pos);
    }

    getIndexNextStoredElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) return i;
            current = current.next;
        }
        return i;
    }
}