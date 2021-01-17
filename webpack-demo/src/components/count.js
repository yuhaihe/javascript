import Vue from 'vue'

export default Vue.component('jsxDemo', {
  data() {
    return {
      msg: 'jsx 写法'
    }
  },
  template: `<div>{{msg}}</div>`
})