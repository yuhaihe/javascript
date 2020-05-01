import Stack from './stack-array.js';
function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let bindaryString = '';

  while(number>0){
    rem = Math.floor(number%2);
    remStack.push(rem);
    number = Math.floor(number/2);
  }

  while(!remStack.isEmpty()){
    bindaryString += remStack.pop().toString();
  }

  return bindaryString;
}

// console.log(decimalToBinary(10));
// console.log(decimalToBinary(17));
// console.log(decimalToBinary(20));

// 转换任意2~36进制
function baseConverter(decNumber, base){
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';
  if (!(base>=2&&base<=36)) {
    return '';
  }

  while(number>0) {
    rem = Math.floor(number%base);
    remStack.push(rem);
    number = Math.floor(number/base);
  }

  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(10, 2));
console.log(baseConverter(43, 8));
console.log(baseConverter(10, 16));
console.log(baseConverter(10, 10));