/**
 * @description 线性探查
 */

import { defaultToString } from "../util.js";
import HashTable from "./8.2.1创建散列表.js";
import { ValuePair } from "./8.1.1创建字典类.js";
import LinkedList from '../第6张-链表/6.1创建链表.js';

class HashTableLinearProbing extends HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new ValuePair(key, value);
            } else {
                let index = position + 1;
                while (this.table[index] != null) {
                    index++;
                }
                this.table[index] = new ValuePair(key, value);
            }
            return true;
        }
        return false;
    }

    get(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key != key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                return this.table[position].value;
            }
        }
        return undefined;
    }

    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key != key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
        }
        return false;
    }

    // removePosition 索引值
    verifyRemoveSideEffect(key, removePosition) {
        // hash 删除元素的散列值
        const hash = this.hashCode(key);
        // index 比对元素的索引值
        let index = removePosition + 1;
        while (this.table[index] != null) {
            // posHash 比对元素的散列值
            const posHash = this.hashCode(this.table[index].key);
            if (posHash <= hash || posHash <= removePosition) {
                this.table[removePosition] = this.table[index];
                delete this.table[index];
                removePosition = index;
            }
            index++;
        }
    }
}

