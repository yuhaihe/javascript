<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <span>{{item.title}}</span>
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from './event';

export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  beforeCreate() {
    // console.log('list is beforeCreate')
  },
  created() {
    console.log('list is created')
  },
  beforeMount() {
    // console.log('list is beforeMount')
  },
  mounted() {
    event.$on('onAddTitle', this.onAddTitleHandler)
    console.log('list is mounted')
  },
  beforeUpdate() {
    console.log('list is beforeUpdate')
  },
  updated() {
    console.log('list is updated')
  },
  beforeDestroy() {
     console.log('list is beforeDestroy')
     event.$off('onAddTitle', this.onAddTitleHandler)
  },
  destroyed() {
      console.log('list is destroyed')
  },
  methods: {
    deleteItem(id) {
      this.$emit('delete', id)
    },
    onAddTitleHandler(title) {
      console.log('onAddTitleHandler', title)
    }
  }
}
</script>

<style>

</style>