<template>
  <div>
    <input type="checkbox" v-model="input" />
    <input type="checkbox" value="a" v-model="input" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      num: 0,
    }
  },
  methods: {},
}
</script>
