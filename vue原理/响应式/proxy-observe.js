// 创建响应式
function reactive(target = {}) {
    if(typeof target !== 'object' || target == null) {
        return target;
    }

    // 代理配置
    const proxyConf = {
        get (target, key, receiver) {
            // 只处理自身属性（飞原型属性）
            const ownKeys = Reflect.ownKeys(target);
            if (ownKeys.includes(key)) {
              console.log('get', key) // 监听
            }
        
            const result = Reflect.get(target, key, receiver);

            // 深度监听 
            // 性能如何提升？
            return reactive(result); // 返回结果
          },
          set (target, key, val, receiver) {
            // 重复数据不处理
            if (val === target[key]) {
              return true;
            }
        
            const ownKeys = Reflect.ownKeys(target);
            if (ownKeys.includes(key)) {
              console.log('已有的key', key) // 监听
            } else {
                console.log('新增的key')
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
    }

    // 生成代理对象
    const observes = new Proxy(target, proxyConf);
    return observes;
}

// 测试数据
const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        city: 'beijing'
    }
}
const proxyData = reactive(data);
proxyData.info.city = 'beijing';
proxyData.info.city = 'asd';