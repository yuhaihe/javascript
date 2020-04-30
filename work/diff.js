 // diff实现

 const data = {
  tag:'ul',
  attrs:{
    id:'list'
  },
  children:[
    {
      tag:'li',
      attrs:{
        className:'item'
      },
      children:['item1']
    },
    {
      tag:'li',
      attrs:{
        className:'item'
      },
      children:['item2']
    }
  ]
}

function createElement(vnode){
  if(vnode.tag == null) {
    return null
  }

  let tag = vnode.tag
  let attrs = vnode.attrs||{}
  let children = vnode.children||[]
  let element = document.createElement(tag)
  for (let attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      element.setAttribute(attr,attrs[attr])
    }
  }
  children.forEach(childvnode => {
    if(typeof childvnode === "string"){
      return element.innerText = childvnode
    }else{
      return element.appendChild(createElement(childvnode))
    }
  });
  return element
}
let html = createElement(data)
document.body.appendChild(html)

/*
 * 1.dom函数==>递归解析vdom树，整理成节点 
 * 2.递归更新函数==>主标签节点相同，遍历对比children子节点的tag，新第一个元素和第二个元素tag相同，继续递归对比子节点，不相同直接replace更换节点
 * 
 */

// 将所有的内容整理[{a:1}]形式
 const obj = {
     text:1,
     children:{
          text:2,
          children:{
              text:3
          }
      }
 }
 let array = []
 function fun(obj){
       array.push(obj.text)
       if(obj.children){
         fun(obj.children)
       }
 }
fun(obj)
 console.log(array)
 
