<template>
  <p>WhyRef -- {{ x }}--{{ y }}</p>
  <p>{{age}}--{{age1}}</p>
  <div>
    <p v-for="item in list" :key="item">{{item}}</p>
  </div>
</template>

<script>
import { computed, reactive, toRefs, watchEffect } from 'vue'
export default {
  name: 'WhyRef',
  setup() {
    let { x, y } = useFeatureX()

    setTimeout(() => {
      x = 100
      state.age = 30
    }, 1500)

    const state = reactive({
      age: 20
    })

    // computed
    const age1 = computed(() => {
      return state.age + 1
    })

    const list = reactive([1,2,3,4])
    watchEffect(() => {
      console.log(state.age)
    })
    return {
      x,
      y,
      ...toRefs(state),
      age1,
      list
    }
  }
}

function useFeatureX() {
  const state = reactive({
    x: 10,
    y: 20
  })

  return toRefs(state)
}
</script>
