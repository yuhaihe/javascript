const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 }
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3
}

function flatten(obj, path = '', result = {}) {
  if (typeof obj !== 'object') {
    return result[path] = obj
  }
  for (const key in obj) {
    let value = obj[key]
    let p = path + key
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          flatten(item, p + '[' + index + ']' + (typeof item === 'object' ? '.' : ''), result)
        })
      } else {
        flatten(value, p + '.', result)
      }
    } else {
      result[p] = value
    }
  }

  return result
}

console.log(flatten(obj))
//  结果返回如下
 // {
 //  'a.b': 1,
 //  'a.c': 2,
 //  'a.d.e': 5,
 //  'b[0]': 1,
 //  'b[1]': 3,
 //  'b[2].a': 2,
 //  'b[2].b': 3
 //   c: 3
 // }

