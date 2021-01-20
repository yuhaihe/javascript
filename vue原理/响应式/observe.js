function updateView () {
  console.log('视图更新');
}

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

  // 从新定义各个属性 （for-in也可以遍历数组）
  for (const key in target) {
    defineReactive(target, key, target[key]);
  }
}

// 准备数据
const data = {
  name: '张三',
  age: 20,
  info: {
    address: '北京'
  }
}
// 监听数据
observe(data);

// 测试
data.name = '李四';
data.age = 25;
data.info.address = '上海'