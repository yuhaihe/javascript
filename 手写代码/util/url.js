/**
 * @description url解析
 * 
  获取 url 中的参数
  1. 指定参数名称，返回该参数的值 或者 空字符串
  2. 不指定参数名称，返回全部的参数对象 或者 {}
  3. 如果存在多个同名参数，则返回数组
 */

const url = 'http://www.nowcoder.com?key=123&keys=234';
function getUrlParam(sUrl, sKey) {
    let param = {}
    sUrl.replace(/(\w+)=([1-9a-z]+)/gi, function(str, key, value, index) {
        let originValue = param[key]
        if(!originValue) {
          param[key] = value;
        }
        if(originValue) {
          param[key] = [...originValue, value];
        }
    });
    return sKey ? param[sKey] || '' : param;
}
console.log(getUrlParam(url));



