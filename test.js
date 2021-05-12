
function cache() {
  let data = {}
  return {
    set: (key, value) => {
      data[key] = value
    },
    get: key => {
      return data[key]
    }
  }
}

const data = cache()
data.set('a',100)
console.log(data.get('a'))