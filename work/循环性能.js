/**
 * @d
 */
let arr = []
let num = 0
for (let index = 0; index < 1000000; index++) {
  arr.push(index)
}

// console.time()
// for (let index = 0; index < arr.length; index++) {
//   num += arr[index]
// }
// console.timeEnd()
// console.time()
// arr.forEach(item => {
//   num += item
// })
// console.timeEnd()
// console.time()
// for (const i in arr) {
//   num += arr[i]
// }
// console.timeEnd()

