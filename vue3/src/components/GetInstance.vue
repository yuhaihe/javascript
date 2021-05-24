<template>
  <div>GetInstance</div>
</template>

<script lang='ts'>
import { getCurrentInstance, onMounted } from 'vue'
export default {
  data() {
    return {
      x: 1,
      y: 2
    }
  },
  setup() {
    const instance = getCurrentInstance()

    // console.log(this) // undefined
     console.log('x', instance.data.x)
    onMounted(() => {
      console.log('x', instance.data.x)
    })
  },
  mounted() {
    console.log(this)
  },
}
</script>