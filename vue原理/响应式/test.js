let arr = [10, 20, 30]
const methods = ['push', 'pop', 'shift', 'unshift', 'splice']

const oldArrayProperty = Array.prototype
const arrProto = Object.create(oldArrayProperty)

methods.forEach(methodName => {
  arrProto[methodName] = function(){
    oldArrayProperty[methodName].call(this, ...arguments)
    console.log('update')
  }
})

arr.__proto__ = arrProto

for (const key in arr) {
  // console.log(key)
  defineReactive(arr, key, arr[key])
}

function defineReactive(target, key, value) {
  Object.defineProperty(target, key, {
   set(){
     console.log('set' + arguments)
   },
   get(){
     return value
   }
 })
}

arr.push(40)
arr = [100]