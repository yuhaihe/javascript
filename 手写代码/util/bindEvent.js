/**
 *@description 模拟jq事件绑定 
 *matches -- 判断节点内是否包含某个选择器
 @example let result = element.matches(selectorString);
 selectorString 是个css选择器字符串.
 */
function bindEvent(el, type, selector, fn) {
    if (fn == null) {
      fn = selector;
      selector = null;
    }
    el.addEventListener(type, function (e) {
      const target = e.target;

      if (selector == null) {
        return fn.call(target, e);
      }

      if (target.matches(selector)) {
        return fn.call(target, e);
      }

    })
  }

  const app = document.getElementById('app');
  bindEvent(app, 'click', 'a', function (e) {
    console.log(this.innerHTML)
    e.preventDefault();
    alert(e.target.innerHTML);
  })