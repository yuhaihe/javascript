import { onMounted, ref, onUnmounted, reactive } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e){
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    console.log('onMounted')
    document.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    console.log('onUnmounted')
    document.removeEventListener('mousemove', update)
  })

  return {
    x, y
  }
}

export function useMousePosition2() {
  const state = reactive({
    x: 0,
    y: 0
  })

  function update(e){
    state.x = e.pageX
    state.y = e.pageY
  }

  onMounted(() => {
    console.log('onMounted')
    document.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    console.log('onUnmounted')
    document.removeEventListener('mousemove', update)
  })

  return state
}

