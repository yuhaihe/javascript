<template>
  <p>{{ numberRef }}</p>
  <p>{{ name }} {{ age }}</p>
  <p>100bei {{ageRef}}</p>
</template>
<script>
import { reactive, toRefs, ref, watch, watchEffect, computed } from 'vue'
export default {
  setup() {
    const numberRef = ref(100)
    const state = reactive({
      name: 'hay',
      age: 20
    })

    const ageRef = ref(state.age * 2)
    watchEffect(() => {
      // 初始化会执行一次
      // console.log('effect')
      // console.log(state.name)
      // console.log(state.age)
      ageRef.value = state.age * 2
    })

    // watch(numberRef, (n, o) => {
    //   console.log('ref watch', n, o)
    // }, //{ immediate: true // 初始化之前就监听，可选 }
    // )

    // watch(() => state.age, v => console.log(v))

    setTimeout(() => {
      // numberRef.value = 200
      state.age = 25
    }, 1500)


    setTimeout(() => {
      state.name = 'hay222'
    }, 3000)

    return {
      numberRef,
      ageRef,
      ...toRefs(state)
    }
  }
}
</script>
