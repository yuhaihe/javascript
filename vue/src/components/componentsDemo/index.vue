<template>
  <div>
    <Input @add="addHandler" />
    <List :list="list" @delete="deleteHandler" />
  </div>
</template>

<script>
import Input from './Input'
import List from './List'
export default {
  components: { Input, List },
  data() {
    return {
      list: [
        { id: 'id-1', title: '标题一' },
        { id: 'id-2', title: '标题二' },
      ],
    }
  },
  beforeCreate() {
    // console.log('index is beforeCreate')
  },
  created() {
    console.log('index is created')
  },
  beforeMount() {
    // console.log('index is beforeMount')
  },
  mounted() {
    console.log('index is mounted')
  },
  beforeUpdate() {
    console.log('index is beforeUpdate')
  },
  updated() {
    console.log('index is updated')
  },
  methods: {
    addHandler(title) {
      this.list.push({
        title,
        id: `id-${Date.now()}`,
      })
    },
    deleteHandler(id) {
      this.list = this.list.filter((item) => item.id !== id)
    },
  },
}
</script>

<style></style>
