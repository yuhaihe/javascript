<template>
  <p>ref demo {{ageRef}} {{state.name}}</p>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
  name: 'Ref',
  setup() {
    const ageRef = ref(20) // 值类型，响应式
    const nameRef = ref('hayho')

    const state = reactive({
      name: nameRef
    })

    setTimeout(() => {
      ageRef.value = 21
      nameRef.value = 'hay222'
    }, 1500);
    return {
      ageRef,
      state
    }
  }
}
</script>