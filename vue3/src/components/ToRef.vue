<template>
  <p>toref demo -- {{ ageRef }}--{{ state.name }}--{{ state.age }}</p>
</template>

<script>
import { reactive, toRef } from 'vue'
export default {
  name: 'ToRef',
  setup() {
    const state = reactive({
      age: 20,
      name: 'hayho'
    })

    // toRef 用于普通对象（）非响应书对象，产出结果不具备响应式
    const ageRef = toRef(state, 'age')

    setTimeout(() => {
      state.age = 25
    }, 1500)

    setTimeout(() => {
      ageRef.value = 30
    }, 3000)
    return {
      state,
      ageRef
    }
  }
}
</script>
