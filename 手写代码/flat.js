function flat (arr) {
  const isDeep = arr.some(item => item instanceof Array);
  if (!isDeep) {
    return arr;
  }
  const res = Array.prototype.concat.apply([], arr)
  return flat(res);
}

console.log(flat([1,2,[3,4,[5,6]]]))