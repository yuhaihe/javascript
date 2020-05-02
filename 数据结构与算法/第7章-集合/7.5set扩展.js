// 1. 模拟并集运算
const union = (setA, setB) => {
    const unionAb = new Set();
    setA.forEach(value => unionAb.add(value));
    setB.forEach(value => unionAb.add(value));
    return unionAb;
}

// 交集
const intersection = (setA, setB) => {
    const intersectionSet = new Set();
    setA.forEach(value => {
        if (setB.has(value)) {
            intersectionSet.add(value);
        }
    });

    return intersectionSet;
};

// 差集
const difference = (setA, setB) => {
    const differenceSet = new Set();
    setA.forEach(value => {
        if (!setB.has(value)) {
            differenceSet.add(value);
        }
    });
    return differenceSet;
};