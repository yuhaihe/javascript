Array.prototype.myMap = function(callback) {
  if(this == null) {
    throw Error(`Cannot read property 'map' of ${this}`)
  }
  if(typeof callback !== 'function') {
    throw Error(`${callback} is not a function`)
  }
  let self = this;
  let res = new Array(self.length);
  for (let i = 0; i < self.length; i++) {
    res[i] = callback(self[i], i);
  }
  return res;
}

const res = [1,2,3,4,5].myMap(item => item * 10, 10);
console.log(res)