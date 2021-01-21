const snabbdom = window.snabbdom;

const patch = snabbdom.init([ // Init patch function with chosen modules
  snabbdom_class, // makes it easy to toggle classes
  snabbdom_props, // for setting properties on DOM elements
  snabbdom_style, // handles styling on elements with support for animations
  snabbdom_eventlisteners, // attaches event listeners
]);

const h = snabbdom.h;

const container = document.getElementById('container');
const vnode = h('ul#list', {}, [
  h('li.Item', {}, 'Item1'),
  h('li.Item', {}, 'Item2'),
])
patch(container, vnode)

document.getElementById('btn-change').onclick = function() {
  const newVnode = h('ul#list', {}, [
    h('li.Item', {}, 'Item1'),
    h('li.Item', {}, 'ItemB'),
    h('li.Item', {}, 'snabbdom'),
  ]);
  patch(vnode, newVnode);
}