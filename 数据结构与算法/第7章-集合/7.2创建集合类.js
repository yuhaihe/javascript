class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        // return element in this.items;
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    values() {
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }

    // 并集
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    // 交集
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallSet = values;
        }
        console.log(smallSet)
        smallSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        })
        return intersectionSet;
    }

    // 差集
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        })
        return differenceSet;
    }

    // 子集
    inSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) return false;
        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        })
        return isSubset;
    }
}

const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

// const unionAB = setA.union(setB);
// console.log(unionAB.values());
// const intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());
// const differenceAB = setA.difference(setB);
// console.log(differenceAB.values());
console.log(setA.inSubsetOf(setB));
console.log(setA.inSubsetOf(setC));