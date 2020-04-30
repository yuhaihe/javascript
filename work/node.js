const fs = require('fs');
let readStream = fs.createReadStream('test.js')
let writerStream = fs.createWriteStream('phone.txt')
// let data = '123456'
// let arr = []
// for (let i = 0; i < 10000; i++) {
//   let phone = 13390512369 + i;
//   arr.push(phone)
// }
readStream.pipe(writerStream)
// console.log(readStream)
// writerStream.write(arr.join('\r'),'UTF8')
// writerStream.end()
// writerStream.on('finish', function() {
//   console.log("写入完成。");
// });

// writerStream.on('error', function(err){
//  console.log(err.stack);
// });

console.log("程序执行完毕");
