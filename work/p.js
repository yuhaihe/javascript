class Promise {
  constructor(fn) {
    this.status = 'PENDING';
    this.successFn = [];
    fn(this.resovle.bind(this), this.reject.bind(this));
  }

  resovle(param) {
    let args = Array.prototype.slice.call(arguments);
    this.status = 'success';
    setTimeout(() => {
      this.successFn.forEach((item, key, arr) => {
        item.apply(null, args);
        arr.shift();
      });
    }, 200)
  }

  reject(errorParam) {
    // this.errorParam = errorParam;
    this.status = 'error';
  }

  then(successFn) {
    this.successFn.push(successFn)
  }

  catch(fn) {
    if(this.status === 'error') {
      fn(this.errorParam)
    }
  }
}

const p = new Promise((resovle, reject) => {
  // setTimeout(() => {
    resovle('success');
  // }, 1000)
})

p.then(res => {
  console.log(res);
  return p;
}).then(res => {
  console.log(res);
})