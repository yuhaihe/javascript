<template>
  <div>
    <input type="text" v-model="msg"> <button @click="addTitle">add</button>
  </div>
</template>

<script>
import event from './event';

export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    // console.log('input is mounted')
  },
  methods: {
    addTitle() {
      // 调用父组件事件
      this.$emit('add', this.msg);

      // 调用自定义事件
      event.$emit('onAddTitle', this.msg)
      this.msg = '';
    }
  }
}
</script>

<style>

</style>