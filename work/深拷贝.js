let obj = {
  say: {
    text: 'hello',
    sayHi: {
      text: 'hi'
    }
  }
};

function cloneDeep (obj) {
  if(obj == null || typeof obj !== 'object'){
    return obj;
  }
  let newObj = obj instanceof Array ? [] :  {};
  for (const key in obj) {
      newObj[key] = cloneDeep(obj[key]);
  }
  return newObj;
}

let copyObj = cloneDeep(obj);
copyObj.say.text = 'change';
console.log(obj.say.text);