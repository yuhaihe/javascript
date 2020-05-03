import { defaultToString } from '../util.js';
import { ValuePair } from './8.1.1创建字典类.js';

export default class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.table = {};
    }

    toString() {
        if (this.isEmpty()) return '';
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return objString;
    }

    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        // 37是为了得到较小数值。可以是任意数
        return hash % 37;
    }

    // 更优的散列函数
    djb2HashCode(key) {
        const tableKey = this.toStrFn(key);
        let hash = 5318;
        for (let i = 0; i < tableKey.length; i++) {
            hash = (hash * 33) + tableKey.charCodeAt(i)
        }
        return hash % 1013;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }
}

// const hash = new HashTable();
// hash.put('Sue', 'Sue@email.com');
// hash.put('Aethelwulf', 'Aethelwulf@email.com');
// hash.put('Jack', 'Jack@email.com');

// console.log(hash.hashCode('Sue') + ' - Sue');
// console.log(hash.hashCode('Aethelwulf') + ' - Aethelwulf');

// console.log(hash.toString());