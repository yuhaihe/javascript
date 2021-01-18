<template>
  <div>
    <p>{{name}} {{major}} {{city}}</p>
    <button @click="showName">显示姓名</button>
  </div>
</template>

<script>
import myMixin from './myMixin';
export default {
  mixins: [myMixin],
  data() {
    return {
      name: 'hayho',
      major: 'web前端'
    }
  },
  mounted() {
    console.log('components mounted:' + this.name)
  }
}
</script>

<style>

</style>