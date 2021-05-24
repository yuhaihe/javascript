<template>
  <p ref='elemRef'>呜呜呜呜</p>
</template>

<script>
import {onMounted, ref} from 'vue'
export default {
  name: 'RefTemplate',
  setup() {
    const elemRef = ref(null)

    onMounted(() => {
      console.log(elemRef.value.innerHTML)
    })

    return {
      elemRef
    }
  }
}
</script>