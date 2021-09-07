const vNode = {
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}

function vNodeTovDom(vNode) {
  const tag =  document.createElement(vNode.tag)
  for (const key in vNode.attrs || {}) {
    if(key === 'id'){
      tag.setAttribute('id', vNode.attrs.id)
    }
  }
  if(vNode.children && vNode.children.length > 0) {
    vNode.children.forEach(node => {
      tag.appendChild(vNodeTovDom(node))
    })
  }

  return tag
}

const vdom = vNodeTovDom(vNode, null)
console.log(vdom)
// 把上诉虚拟Dom转化成下方真实Dom
// <div id="app">
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>
