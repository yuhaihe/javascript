
function updateView () {
  console.log('视图更新' + JSON.stringify(data));
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建对象，原型指向 oldArrayProperty，可以继续扩展新方法
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodsName => {
  arrProto[methodsName] = function() {
    oldArrayProperty[methodsName].call(this, ...arguments);
    updateView(); // 触发视图更新
  };
})

function defineReactive (target, key, value) {
  // 深度监听
  observe(value);

  Object.defineProperty(target, key, {
    get () {
      return value;
    },
    set (newVal) {
      if (newVal !== value) {
        value = newVal;
        observe(newVal);
        updateView();
      }
    }
  })
}
function observe (target) {
  if (typeof target !== 'object' || target == null) {
    return target;
  }

  if(Array.isArray(target)) {
    target.__proto__ = arrProto;
  }

  // 从新定义各个属性 （for-in也可以遍历数组）
  for (const key in target) {
    defineReactive(target, key, target[key]);
  }
}

// 准备数据
let data = {
  // name: '张三',
  // age: 20,
  // info: {
  //   address: '北京'
  // },
  nums: [10, 20, 30]
}
// 监听数据
observe(data);

// 测试

// data.age = 25;
// data.name = '李四';
// data.info.address = '上海';
// data.nums.push(40)
data.nums = [200]

