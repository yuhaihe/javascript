let reg =   /{{(\w+)}}/ig;
let str = '今天我想吃{{eat}},然后{{sleep}}';
const data = {
  eat: '苹果',
  sleep: '睡觉'
}
let d = str;
str.replace(reg, function(s, n1){
  d = d.replace(s, data[n1])
})
console.log(d)
