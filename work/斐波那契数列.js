/**
 * @description 1,1,2,3,5,8,13,21.....n
 */
let [x, y] = [0, 0];
function numbers(n) {
    if (n === 0 || typeof n !== 'number') return null;
    if (n <= 2) return 1;
    let a1 = 1;
    let a2 = 1;
    let an;
    for (let i = 3; i <= n; i++) {
        x++;
        an = a1 + a2;
        [a1, a2] = [a2, an];
    }
    return an;
}
console.log(numbers(10))

// function numbers2(n) {
//     y++;
//     if (n === 0 || typeof n !== 'number') return null;
//     if (n <= 2) return 1;
//     return numbers2(n - 1) + numbers2(n - 2);
// }
// console.log(numbers2(3))
// console.log(x, y)