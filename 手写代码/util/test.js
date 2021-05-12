function count(str) {
  const obj = {}
  for(const i of str) {
    if(i.charCodeAt() !== 32) {
      obj[i] ? obj[i]++ : obj[i] = 1
    }
  }

  return obj   
}

console.log(count('hello world'))