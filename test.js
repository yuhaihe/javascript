var romanToInt = function (s) {
    const valueMap = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        const value = valueMap[s[i]];
        const nextValue = s[i+1] == null ? 0 : valueMap[s[i+1]];
        if(value >= nextValue) {
            num += value 
        } else {
            num += value  / -1;
        }
        
    }
    return num;
};
console.log(romanToInt('MCMXCIV'))