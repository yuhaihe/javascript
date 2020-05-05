/**
 * @description 阶乘递归实现
 */

//  非递归
function factorialIterative(number) {
    if (number < 0) return undefined;
    let total = 1;
    for (let n = number; n > 1; n--) {
        total = total * n;
    }
    return total;
}

//  递归
function factorial(n) {
    // console.trace();
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 斐波那契数列
// 0 1 1 2 3 5 8 13
function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) {
        fibN = fibNMinus2 + fibNMinus1;
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}

// function fibonacci(n) {
//     if (n < 1) return 0;
//     if (n <= 2) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(5))

// 记忆化
function fibonacciMemoization(n) {
    const memo = [0, 1];
    const fibonacci = (n) => {
        console.log(memo)
        if (memo[n] != null) return memo[n];
        return memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return fibonacci(n);
}

console.log(fibonacciMemoization(12));
