const compiler = require('vue-template-compiler');

// const template = '<p>{{message}}</p>';
// with(this){return _c('p',[_v(_s(message))])}
// function() { with(this){return createElement('p',[createTextNode(toString(message))])} }
// _c createElement => vnode

// 表达式
// const template = `<p>{{flag ? message : 'no message found'}}</p>`;
// with(this){return _c('p',[_v(_s(flag ? message : 'no message found'))])}

// 属性和动态属性
// const template = `
//     <div id="div1" class="container">
//       <img :src="imgUrl" />
//     </div>`
// with(this){ return _c('div',{staticClass:"container",attrs:{"id":"div1"}},[_c('img',{attrs:{"src":imgUrl}})])}

// 条件
// const template = `
//     <div>
//         <p v-if="flag==='a'">A</p>
//         <p v-else>B</p>
//     </div>
// `
// with(this){return _c('div',[(flag==='a')?_c('p',[_v("A")]):_c('p',[_v("B")])])}

// 循环
const template = `
    <ul>
        <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
`
// with(this){return _c('ul',_l((list),function(item){return _c('li',{key:item.id},[_v(_s(item.title))])}),0)}

// 编译后_含义
// function installRenderHelpers (target: any) {
//   target._o = markOnce
//   target._n = toNumber
//   target._s = toString
//   target._l = renderList
//   target._t = renderSlot
//   target._q = looseEqual
//   target._i = looseIndexOf
//   target._m = renderStatic
//   target._f = resolveFilter
//   target._k = checkKeyCodes
//   target._b = bindObjectProps
//   target._v = createTextVNode
//   target._e = createEmptyVNode
//   target._u = resolveScopedSlots
//   target._g = bindObjectListeners
//   target._d = bindDynamicKeys
//   target._p = prependModifier
// }

// 编译
const res = compiler.compile(template);
console.log(res.render);