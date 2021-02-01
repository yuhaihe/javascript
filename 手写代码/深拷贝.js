let obj = {
  say: {
    text: 'hello',
    sayHi: {
      text: 'hi'
    }
  }
};
let arr = [{a: 1}]
function cloneDeep (obj) {
  if(typeof obj !== 'object' || obj == null ){
    return obj;
  }

  let data = obj instanceof Array ? [] : {};
  for (const key in obj) {
    data[key] = cloneDeep(obj[key]);
  }
  return data;
}

let copyObj = cloneDeep(arr);
copyObj[0].a = 'change';
console.log(arr[0].a);