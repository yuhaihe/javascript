// [
// {
//     "id": 1,
//     "name": "部门1",
//     "pid": 0,
//     "children": [
//         {
//             "id": 2,
//             "name": "部门2",
//             "pid": 1,
//             "children": []
//         },
//         {
//             "id": 3,
//             "name": "部门3",
//             "pid": 1,
//             "children": [
//                 // 结果 ,,,
//             ]
//         }
//     ]
// }
// ]


let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]
const res = tree(arr)
console.log(res)

function tree(arr) {
  if(!Array.isArray(arr)) return {}

  let map = {}
  let result = {}
  arr.forEach(item => {
    map[item.id] = {...item, children: []}
  })
  
  for (const item of arr) {
    const id = item.id
    const pid = item.pid
    const treeItem = map[id]

    if(pid === 0) {
      result= treeItem
    } else {
      map[pid].children.push(treeItem)
    }
  }

  return result

}

