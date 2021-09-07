// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

// 示例 1：

// 输入：s = "()"
// 输出：true

// 示例 2：

// 输入：s = "()[]{}"
// 输出：true

// 示例 3：

// 输入：s = "(]"
// 输出：false
function bracket(str) {
  const valid = {"()":true,'[]':true,'{}':true}
  const array = str.split('')
  const quene = []
  array.forEach(item => {
    const prev = quene[quene.length - 1]
    if(valid[prev + item]) {
      quene.pop()
    } else {
      quene.push(item)
    }
  })

  return quene.length === 0
}

const res = bracket('([]{)')
console.log(res)