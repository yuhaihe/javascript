
/**
 * @description 进制转换
 * 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
    1. rgb 中每个 , 后面的空格数量不固定
    2. 十六进制表达式使用六位小写字母
    3. 如果输入不符合 rgb 格式，返回原始输入
 * 
 */
function rgb2hex(sRGB) {
  const array = sRGB.match(/(\d+)/g);
  return '#' + array.map(item => {
    return parseInt(item).toString(16)
  }).join('')
}
const res = rgb2hex('rgb(255, 255, 255)')
console.log(res)