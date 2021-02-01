/**
 * 查找两个节点的最近的一个共同父节点，可以包括节点自身
 */

function commonParentNode(oNode1, oNode2) {
  let parent = oNode1.parentNode;
  while(parent!=null) {
    if(parent.contains(oNode2)){
      return parent;
    }
    parent = parent.parentNode;
  }

  return oNode1;
}
const res = commonParentNode(document.querySelector('body'), document.querySelector('html'))
console.log(res)