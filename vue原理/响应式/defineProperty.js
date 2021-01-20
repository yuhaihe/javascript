// 对象监听
let data = {};
let name = 'zhangsan';

Object.defineProperty(data, 'name', {
  get() {
    return name;
  },
  set(newVal) {
    name = newVal;
  }
})

data.name = 'lisi';

