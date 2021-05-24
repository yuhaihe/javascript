<template>
  <p>torefs demo -- {{ age }}--{{ name }}</p>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'ToRefs',
  setup() {
    const state = reactive({
      age: 20,
      name: 'hayho'
    })

    const stateAsRefs = toRefs(state) // 转换普通对象

    setTimeout(() => {
      state.age++
      // stateAsRefs.age.value++
    }, 1500);

    return stateAsRefs
  }
}
</script>
