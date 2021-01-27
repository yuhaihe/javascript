const data = [1, 2, 3]

/**
 * Reflect 和proxy能力一一对应
 * 规范化 标准化 函数式
 * 替代掉object上的工具函数
 */
const proxyData = new Proxy(data, {
  get (target, key, receiver) {
    // 只处理自身属性（飞原型属性）
    const ownKeys = Reflect.ownKeys(target);
    if (ownKeys.includes(key)) {
      console.log('get', key) // 监听
    }

    const result = Reflect.get(target, key, receiver);
    return result; // 返回结果
  },
  set (target, key, val, receiver) {
    // 重复数据不处理
    if (val === target[key]) {
      return true;
    }

    const result = Reflect.set(target, key, val, receiver);
    console.log('set', key, val)
    return result //是否设置成功
  },
  deleteProperty (target, key) {
    const result = Reflect.deleteProperty(target, key);
    console.log('deleteProperty', key)
    return result //是否删除成功
  }
})
proxyData.push(5)

// var obj = {a:1}
// Reflect.set(obj, 'b', 200)
// true
// obj
// {a: 1, b: 200}
// Reflect.ownKeys(obj)
// (2) ["a", "b"]
// Reflect.get(obj, 'b')
// 200